import axios from 'axios'
import dayjsTaipei from '../helpers/timeHelper'
import { removeTokensAndRedirect } from '../helpers/jwtHelper'
const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'
let requireNewTokenPromise = null

export const bringJWT = async (config) => {
  try {
    const access_token = JSON.parse(localStorage.getItem('access_token'))
    if (access_token) {
      const { accessTokenExpiredTime, accessToken } = access_token
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
    console.error(err)
  }
}
export const axiosErrorHandler = (error) => {
  const { message } = error.message
  const { status, data } = error.response
  return Promise.reject({
    status,
    message: data?.message ? data.message : message,
  })
}
export const responseHandler = (response) => {
  return { ...response.data, status: response.status }
}
async function requireNewToken() {
  try {
    const { refreshToken } = JSON.parse(localStorage.getItem('refresh_token'))
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
  } catch (axiosError) {
    removeTokensAndRedirect()
  }
}
