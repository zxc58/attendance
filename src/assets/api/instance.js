import axios from 'axios'
import { bringJWT } from './interceptors'
const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'

const instance = axios.create({
  baseURL: backendURL,
  timeout: 3000,
})

instance.interceptors.request.use(bringJWT, (err) => {
  return Promise.reject(err)
})

instance.interceptors.response.use(
  (response) => response.data,
  (axiosError) => {
    const status = axiosError?.response?.status
    const message = axiosError?.response?.data?.message ?? axiosError?.message
    return Promise.reject({
      status,
      message,
    })
  }
)

export default instance
