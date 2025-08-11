import { useMemo } from 'react'
import ATMScreen from '../components/ATMScreen'
import { ATM_BUTTONS } from '../constants/Buttons'
import { useNavigate } from 'react-router-dom'
import { transactionServices } from '../services/transactions.service'
import { useQuery } from '@tanstack/react-query'

export default function BalancePage() {
  const navigate = useNavigate()

  const {
    data: balance,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['balance'],
    queryFn: () => transactionServices.getBalance(),
  })

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

  let title = ''

  if (isLoading) {
    title = <span>Loading...</span>
  } else if (error) {
    title = <span>{error?.response?.data?.message}</span>
  } else {
    title = (
      <span>
        Hi Peter Parker! <br />
        Your balance is <br />${Number(balance?.data?.balance || 0).toFixed(2)}
      </span>
    )
  }

  return <ATMScreen title={title} buttons={buttons} />
}
