import axios from 'axios'
import { removeTokens, storeJWT } from '../helpers/jwtHelper'
import router from '../../router'

const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'

const instance = axios.create({
  baseURL: backendURL,
  timeout: 3000,
})

instance.interceptors.request.use(useJWT, (err) => {
  return Promise.reject(err)
})

instance.interceptors.response.use(
  (response) => response.data,
  responseErrorHandler
)

export default instance

function useJWT(config) {
  const access_token = localStorage.getItem('access_token')
  if (!access_token) {
    const controller = new AbortController()
    const cfg = { ...config, signal: controller.signal }
    controller.abort('Refresh JWT fail')
    removeTokens()
    router.push('/login')
    return cfg
  }
  config.headers.Authorization = `Bearer ${access_token}`
  return config
}

async function responseErrorHandler(error) {
  const originalConfig = error.config
  if (error?.response?.status) {
    const refresh_token = localStorage.getItem('refresh_token')
    switch (error.response.status) {
      case 401:
        if (!originalConfig._retry && refresh_token) {
          originalConfig._retry = true
          const { data } = await instance.post('/auth/refresh', {
            refreshToken: refresh_token,
          })
          storeJWT(data)
          return instance.request(originalConfig)
        } else {
          removeTokens()
          router.push('/login')
          return Promise.reject(error.response.data)
        }
      default:
        return Promise.reject(error.response.data)
    }
  }
  return Promise.reject(error)
}
