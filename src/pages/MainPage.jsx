import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import ATMScreen from '../components/ATMScreen'
import { ATM_BUTTONS } from '../constants/Buttons'
import { usePin } from '../hooks/usePin'

export default function MainPage() {
  const { user, logout } = usePin()
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  const buttonConfig = useMemo(() => {
    return {
      ...ATM_BUTTONS,
      LEFT_3: {
        ...ATM_BUTTONS.LEFT_3,
        label: 'Withdraw',
        onClick: () => handleNavigation('/withdraw'),
      },
      LEFT_4: {
        ...ATM_BUTTONS.LEFT_4,
        label: 'Deposit',
        onClick: () => handleNavigation('/deposit'),
      },
      RIGHT_2: {
        ...ATM_BUTTONS.RIGHT_2,
        label: 'Exit',
        onClick: handleLogout,
      },
      RIGHT_3: {
        ...ATM_BUTTONS.RIGHT_3,
        label: 'Balance',
        onClick: () => handleNavigation('/balance'),
      },
      RIGHT_4: {
        ...ATM_BUTTONS.RIGHT_4,
        label: 'Re-Enter PIN',
        onClick: () => navigate('/enter-pin'),
      },
    }
  }, [navigate, logout])

  const buttons = Object.values(buttonConfig)

  const getName = () => {
    if (!user?.firstName && !user?.lastName) {
      return 'Valued Customer'
    }
    return `${user?.firstName || ''} ${user?.lastName || ''}`.trim()
  }

  const title = (
    <span>
      Hi {getName()}! <br />
      Please make a choice...
    </span>
  )

  return <ATMScreen title={title} buttons={buttons} />
}
