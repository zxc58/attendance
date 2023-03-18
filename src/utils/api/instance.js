import axios from 'axios'
import to from 'await-to-js'
import { removeTokens, storeJWT } from '../helpers/jwtHelper'
import router from '../../router'

const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'

const instance = axios.create({
  baseURL: backendURL,
  timeout: 1000,
  withCredentials: true,
})

instance.interceptors.request.use(carryJWT, (err) => {
  return Promise.reject(err)
})

instance.interceptors.response.use(
  (response) => response.data.data ?? response.data ?? response,
  responseErrorHandler
)

export default instance

function carryJWT(config) {
  const accessToken = localStorage.getItem('access_token')
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
}

async function responseErrorHandler(error) {
  const originalConfig = error.config
  if (error?.response?.status) {
    switch (error.response.status) {
      case 401:
        if (error.response.headers['x-refresh-token'] !== 'false') {
          const [error, data] = await to(instance.post('/auth/refresh'))
          if (error) {
            removeTokens()
            return router.push('/login')
          }
          storeJWT(data)
          return instance.request(originalConfig)
        }
        return Promise.reject(error)
      default:
        return Promise.reject(error)
    }
  }
  return Promise.reject(error)
}
