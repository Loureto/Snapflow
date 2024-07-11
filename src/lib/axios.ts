import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
  baseURL: env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error) // TODO: handle error
  }
)

api.interceptors.request.use((config) => {
  // TODO: handle token
  return config
})
