import { useNavigate } from 'react-router-dom'
import ATMScreen from '../components/ATMScreen'
import { ATM_BUTTONS } from '../constants/Buttons'
import { useMemo } from 'react'

export default function WelcomePage() {
  const navigate = useNavigate()

  const handleStartTransaction = () => {
    navigate('/enter-pin')
  }

  const buttonConfig = useMemo(() => {
    return {
      ...ATM_BUTTONS,
      RIGHT_4: {
        ...ATM_BUTTONS.RIGHT_4,
        label: 'Enter PIN',
        onClick: handleStartTransaction,
      },
    }
  }, [])

  const buttons = Object.values(buttonConfig)

  const title = (
    <span>
      Welcome to the <br />
      ATM
    </span>
  )

  return (
    <>
      <ATMScreen title={title} buttons={buttons} />
    </>
  )
}
