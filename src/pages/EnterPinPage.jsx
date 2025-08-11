import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ATMScreen from '../components/ATMScreen'
import { ATM_BUTTONS } from '../constants/Buttons'
import { usePin } from '../hooks/usePin'

export default function EnterPinPage() {
  const navigate = useNavigate()
  const [pin, setPin] = useState('')
  const [error, setError] = useState({
    status: false,
    message: '',
  })
  const { authenticate } = usePin()

  const handleCheckPin = useCallback(async () => {
    if (pin.length === 4 && (await authenticate(pin))) {
      return navigate('/main')
    }
    setError({
      status: true,
      message: 'Incorrect PIN. Please try again.',
    })
    setPin('')
  }, [pin, authenticate, navigate])

  const handleReEnterPin = useCallback(() => {
    setError({
      status: false,
      message: '',
    })
    setPin('')
  }, [])

  const handleCancel = () => {
    navigate('/')
  }

  const handleKeyPress = (e) => {
    if (e.key >= '0' && e.key <= '9' && pin.length < 4) {
      setPin((prev) => prev + e.key)
    }
    if (e.key === 'Backspace') {
      setPin((prev) => prev.slice(0, -1))
    }
    if (e.key === 'Enter' && pin.length === 4) {
      handleCheckPin()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  const buttonConfig = useMemo(() => {
    return {
      ...ATM_BUTTONS,
      LEFT_4: {
        ...ATM_BUTTONS.LEFT_4,
        label: 'Cancel',
        onClick: handleCancel,
      },
      RIGHT_4: {
        ...ATM_BUTTONS.RIGHT_4,
        label: error.status ? 'Re-Enter PIN' : 'Continue',
        onClick: error.status ? handleReEnterPin : pin.length === 4 ? handleCheckPin : null,
      },
    }
  }, [error.status, handleCheckPin, handleReEnterPin, handleCancel])

  const pinDisplay = useMemo(() => {
    return pin
      .split('')
      .map((p) => '*')
      .join(' ')
  }, [pin])

  const buttons = Object.values(buttonConfig)

  const title = error.status ? (
    <span>{error.message}</span>
  ) : (
    <span>
      Enter your PIN <br />
      {pinDisplay}
    </span>
  )

  return (
    <>
      <ATMScreen title={title} buttons={buttons} />
    </>
  )
}
