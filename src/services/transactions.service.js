import { get, post } from '../utils/http'

// Transaction services
export const transactionServices = {
  withdraw: async (amount, accountType = 'checking') => {
    return await post('/transactions/withdraw', {
      amount: parseFloat(amount),
      accountType,
      timestamp: Date.now(),
      transactionId: `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    })
  },

  deposit: async (amount, accountType = 'checking') => {
    return await post('/transactions/deposit', {
      amount: parseFloat(amount),
      accountType,
      timestamp: Date.now(),
      transactionId: `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    })
  },
  getBalance: async () => {
    return await get('/transactions/balance')
  },
}
