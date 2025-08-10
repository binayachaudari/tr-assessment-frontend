import { useMemo } from 'react'
import ATMScreen from '../components/ATMScreen'
import { ATM_BUTTONS } from '../constants/Buttons'
import { useNavigate } from 'react-router-dom'

export default function DepositPage() {
  const navigate = useNavigate()
  const buttonConfig = useMemo(() => {
    return {
      ...ATM_BUTTONS,

      LEFT_4: {
        ...ATM_BUTTONS.LEFT_4,
        label: 'Back',
        onClick: () => navigate(-1),
      },
      RIGHT_4: {
        ...ATM_BUTTONS.RIGHT_4,
        label: 'Confirm',
        onClick: () => {},
      },
    }
  }, [])

  const buttons = Object.values(buttonConfig)

  const title = (
    <span>
      Hi Peter Parker! <br />
      Please Enter the amount you want to deposit
    </span>
  )

  return <ATMScreen title={title} buttons={buttons} />
}
