import { post, remove } from '../utils/http'

export const authServices = {
  validatePin: async (pin) => {
    return await post('/cards/validate-pin', {
      pin,
      cardNumber: import.meta.env.VITE_DEFAULT_CARD,
    })
  },

  logout: async (sessionId) => {
    return await remove(`/sessions/${sessionId}`)
  },
}
