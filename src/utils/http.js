import axios from 'axios'
import { getSessionDetails } from '../utils/localstorage'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use((config) => {
  const { sessionId, token } = getSessionDetails()

  if (sessionId) {
    config.headers['X-Session-ID'] = sessionId
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

const get = async (endpoint, config = {}) => {
  const response = await api.get(endpoint, config)
  return response.data
}

const post = async (endpoint, data = {}, config = {}) => {
  const response = await api.post(endpoint, data, config)
  return response.data
}

const put = async (endpoint, data = {}, config = {}) => {
  const response = await api.put(endpoint, data, config)
  return response.data
}

const remove = async (endpoint, config = {}) => {
  const response = await api.delete(endpoint, config)
  return response.data
}

export { get, post, put, remove }
