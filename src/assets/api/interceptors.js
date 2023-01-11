import axios from 'axios'
import dayjsTaipei from '../helpers/timeHelper'
import { removeTokensAndRedirect } from '../helpers/jwtHelper'
const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'
let requireNewTokenPromise = null

export const bringJWT = async (config) => {
  const controller = new AbortController()
  try {
    const accessTokenJsonString = localStorage.getItem('access_token')
    if (accessTokenJsonString) {
      const accessTokenObject = JSON.parse(accessTokenJsonString)
      const { accessTokenExpiredTime, accessToken } = accessTokenObject
      const isExpired = dayjsTaipei().isAfter(
        dayjsTaipei(accessTokenExpiredTime)
      )
      if (isExpired) {
        if (!requireNewTokenPromise) {
          requireNewTokenPromise = requireNewToken()
        }
        const temp = requireNewTokenPromise
        const newAccessToken = await temp
        requireNewTokenPromise = null
        config.headers.Authorization = `Bearer ${newAccessToken}`
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
    }
    return config
  } catch (err) {
    const cfg = { ...config, signal: controller.signal }
    controller.abort('Refresh JWT fail')
    removeTokensAndRedirect()
    return cfg
  }
}

async function requireNewToken() {
  try {
    const refresh_token = localStorage.getItem('refresh_token')
    if (!refresh_token) {
      throw new Error('No refresh token')
    }
    const { refreshToken } = JSON.parse(refresh_token)
    const response = await axios.post(`${backendURL}/auth/refresh`, {
      refreshToken,
    })
    const { accessToken, accessTokenExpiredTime } = response.data
    const access_token = JSON.stringify({
      accessToken,
      accessTokenExpiredTime,
    })
    localStorage.setItem('access_token', access_token)
    return accessToken
  } catch (error) {
    const message = 'Refresh JWT fail (refresh token may been expired)'
    return Promise.reject(new Error(message))
  }
}
