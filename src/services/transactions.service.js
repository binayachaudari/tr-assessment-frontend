import { get, post } from '../utils/http'

// Transaction services
export const transactionServices = {
  withdraw: async (amount) => {
    return await post('/transactions/withdraw', {
      amount: parseFloat(amount),
    })
  },

  deposit: async (amount) => {
    return await post('/transactions/deposit', {
      amount: parseFloat(amount),
    })
  },

  getBalance: async () => {
    return await get('/transactions/balance')
  },

  getRecentTransaction: async () => {
    return await get('/transactions/recent')
  },
}
