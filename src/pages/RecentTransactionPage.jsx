import { useQuery } from '@tanstack/react-query'
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import ATMScreen from '../components/ATMScreen'
import { ATM_BUTTONS } from '../constants/Buttons'
import { transactionServices } from '../services/transactions.service'

const RecentTransactionPage = () => {
  const navigate = useNavigate()

  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['recent-transactions'],
    queryFn: () => transactionServices.getRecentTransaction(),
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
        {transactions?.data?.map((txn) => (
          <div>
            ${txn.type} ${txn.amount || 0} ${new Date(txn.createdAt).toLocaleDateString()}
          </div>
        ))}
      </span>
    )
  }

  return <ATMScreen title={title} buttons={buttons} />
}

export default RecentTransactionPage
