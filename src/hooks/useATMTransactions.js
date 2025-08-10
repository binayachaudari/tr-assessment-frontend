import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { accountServices, transactionServices } from '../services/cards.services'
import { usePin } from './usePin'

export function useATMTransactions() {
  const queryClient = useQueryClient()
  const { isAuthenticated } = usePin()

  // Account balance query
  const {
    data: balanceData,
    isLoading: isLoadingBalance,
    error: balanceError,
    refetch: refetchBalance,
  } = useQuery({
    queryKey: ['account', 'balance'],
    queryFn: accountServices.getBalance,
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  })

  // Transaction history query
  const {
    data: transactionHistory,
    isLoading: isLoadingHistory,
    error: historyError,
  } = useQuery({
    queryKey: ['account', 'transactions'],
    queryFn: () => accountServices.getTransactionHistory(20),
    enabled: isAuthenticated,
    staleTime: 2 * 60 * 1000, // 2 minutes
    retry: 1,
  })

  // Withdrawal mutation
  const withdrawMutation = useMutation({
    mutationFn: ({ amount, accountType }) => transactionServices.withdraw(amount, accountType),
    onSuccess: () => {
      // Invalidate and refetch balance and history
      queryClient.invalidateQueries({ queryKey: ['account'] })
    },
    onError: (error) => {
      console.error('Withdrawal failed:', error)
    },
  })

  // Deposit mutation
  const depositMutation = useMutation({
    mutationFn: ({ amount, accountType }) => transactionServices.deposit(amount, accountType),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] })
    },
    onError: (error) => {
      console.error('Deposit failed:', error)
    },
  })

  // Transfer mutation
  const transferMutation = useMutation({
    mutationFn: ({ fromAccount, toAccount, amount }) =>
      transactionServices.transferFunds(fromAccount, toAccount, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] })
    },
    onError: (error) => {
      console.error('Transfer failed:', error)
    },
  })

  // Helper functions
  const withdraw = async (amount, accountType = 'checking') => {
    try {
      const result = await withdrawMutation.mutateAsync({ amount, accountType })
      return { success: true, data: result }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const deposit = async (amount, accountType = 'checking') => {
    try {
      const result = await depositMutation.mutateAsync({ amount, accountType })
      return { success: true, data: result }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const transfer = async (fromAccount, toAccount, amount) => {
    try {
      const result = await transferMutation.mutateAsync({ fromAccount, toAccount, amount })
      return { success: true, data: result }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  return {
    // Data
    balance: balanceData?.data,
    transactions: transactionHistory?.data,

    // Loading states
    isLoadingBalance,
    isLoadingHistory,
    isProcessingWithdraw: withdrawMutation.isPending,
    isProcessingDeposit: depositMutation.isPending,
    isProcessingTransfer: transferMutation.isPending,

    // Error states
    balanceError,
    historyError,
    withdrawError: withdrawMutation.error,
    depositError: depositMutation.error,
    transferError: transferMutation.error,

    // Actions
    withdraw,
    deposit,
    transfer,
    refetchBalance,

    // Raw mutations (for advanced usage)
    withdrawMutation,
    depositMutation,
    transferMutation,
  }
}
