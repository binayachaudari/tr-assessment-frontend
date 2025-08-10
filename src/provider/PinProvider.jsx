import { useMutation } from '@tanstack/react-query'
import { jwtDecode } from 'jwt-decode'
import { useCallback, useEffect, useState } from 'react'
import { PinContext } from '../contexts/PinContext'
import { authServices } from '../services/auth.service'
import { getSessionDetails, removeSessionDetails, setSessionDetails } from '../utils/localstorage'
import { CARD_BRAND } from '../constants/cardBrands'

export function PinProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    cardBrand: null,
    user: null,
  })

  // Initialize session on mount
  useEffect(() => {
    initializeSession()
  }, [])

  const initializeSession = useCallback(() => {
    const sessionDetails = getSessionDetails()

    if (!sessionDetails.sessionId || !sessionDetails.token) {
      setAuthState((prev) => ({ ...prev, isAuthenticated: false }))
      return
    }

    try {
      const decoded = jwtDecode(sessionDetails.token)

      // Check if token is expired
      if (decoded.exp * 1000 < Date.now()) {
        logout()
        return
      }

      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: true,
        user: decoded?.userId,
        cardBrand: CARD_BRAND[sessionDetails.cardBrand] || null,
      }))
    } catch (error) {
      console.error('Invalid token:', error)
      logout()
    }
  }, [])

  const { mutate: authenticatePIN, isPending } = useMutation({
    mutationFn: authServices.validatePin,
    onSuccess: (res) => {
      const data = res?.data
      const cardBrandType = CARD_BRAND[data?.cardInfo?.cardType] || null

      setSessionDetails({
        sessionId: data.sessionId,
        token: data.token,
        cardBrand: data?.cardInfo?.cardType,
      })

      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: true,
        cardBrand: cardBrandType,
        user: jwtDecode(data.token)?.userId,
      }))
    },
    onError: (error) => {
      setAuthState((prev) => ({
        ...prev,
      }))
      logout()
    },
  })

  const authenticate = useCallback(
    (pin) => {
      return new Promise((resolve) => {
        authenticatePIN(pin, {
          onSuccess: () => resolve(true),
          onError: () => resolve(false),
        })
      })
    },
    [authenticatePIN],
  )

  const logout = useCallback(async () => {
    try {
      // Call backend logout if authenticated
      if (authState.isAuthenticated) {
        await authServices.logout(getSessionDetails().sessionId)
      }
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear local state regardless of backend response
      setAuthState({
        isAuthenticated: false,
        cardBrand: null,
        user: null,
      })
      removeSessionDetails()
    }
  }, [authState.isAuthenticated])

  const value = {
    ...authState,
    isLoading: isPending,
    authenticate,
    logout,
  }

  return <PinContext.Provider value={value}>{children}</PinContext.Provider>
}
