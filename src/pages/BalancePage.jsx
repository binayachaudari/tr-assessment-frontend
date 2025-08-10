import { useMemo } from 'react'
import ATMScreen from '../components/ATMScreen'
import { ATM_BUTTONS } from '../constants/Buttons'
import { useNavigate } from 'react-router-dom'

export default function BalancePage() {
  const navigate = useNavigate()
  const buttonConfig = useMemo(() => {
    return {
      ...ATM_BUTTONS,

      LEFT_4: {
        ...ATM_BUTTONS.LEFT_4,
        label: 'Back',
        onClick: () => navigate(-1),
      },
    }
  }, [])

  const buttons = Object.values(buttonConfig)

  const title = (
    <span>
      Hi Peter Parker! <br />
      Your balance is <br />
      $1000.00
    </span>
  )

  return <ATMScreen title={title} buttons={buttons} />
}
