import { SESSION_KEYS } from '../constants/session'
const setSessionDetails = ({ sessionId, token, cardBrand }) => {
  try {
    localStorage.setItem(SESSION_KEYS.SESSION_ID, sessionId)
    localStorage.setItem(SESSION_KEYS.TOKEN, token)
    localStorage.setItem(SESSION_KEYS.CARD_BRAND, cardBrand)
  } catch (error) {
    console.error('Failed to store session:', error)
  }
}

const getSessionDetails = () => {
  try {
    return {
      sessionId: localStorage.getItem(SESSION_KEYS.SESSION_ID),
      token: localStorage.getItem(SESSION_KEYS.TOKEN),
      cardBrand: localStorage.getItem(SESSION_KEYS.CARD_BRAND),
      expired: false,
    }
  } catch (error) {
    console.error('Failed to get session:', error)
    return { sessionId: null, token: null, cardBrand: null, expired: false }
  }
}

const removeSessionDetails = () => {
  try {
    Object.values(SESSION_KEYS).forEach((key) => {
      localStorage.removeItem(key)
    })
  } catch (error) {
    console.error('Failed to clear session:', error)
  }
}

const isSessionValid = () => {
  const session = this.getSessionDetails()
  return session.sessionId && session.token && !session.expired
}

export { setSessionDetails, getSessionDetails, removeSessionDetails, isSessionValid }
