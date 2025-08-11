import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ATMScreen from '../components/ATMScreen'
import { ATM_BUTTONS } from '../constants/Buttons'
import { transactionServices } from '../services/transactions.service'

export default function WithdrawPage() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState(0)

  const {
    mutate: withdraw,
    error,
    isPending,
  } = useMutation({
    mutationFn: (amount) => transactionServices.withdraw(amount),
    onSettled: () => {
      navigate('/main')
    },
  })

  const handleKeyPress = (e) => {
    if (e.key >= '0' && e.key <= '9') {
      setAmount((prev) => prev + e.key)
    }
    if (e.key === 'Backspace') {
      setAmount((prev) => prev.slice(0, -1))
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
        label: 'Back',
        onClick: () => navigate(-1),
      },
      RIGHT_4: {
        ...ATM_BUTTONS.RIGHT_4,
        label: 'Confirm',
        onClick: () => amount > 0 && withdraw(amount),
      },
    }
  }, [amount, withdraw])

  const buttons = Object.values(buttonConfig)

  let title = ''

  if (isPending) {
    title = <span>Processing...</span>
  } else if (error) {
    title = <span>{error?.response?.data?.message}</span>
  } else {
    title = (
      <span>
        Hi Peter Parker! <br />
        Please Enter the amount you want to withdraw <br />${Number(amount).toFixed(2)}
      </span>
    )
  }

  return <ATMScreen title={title} buttons={buttons} />
}
