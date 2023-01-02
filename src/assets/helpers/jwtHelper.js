import router from '../../router'
export const storeJWT = (data) => {
  const { accessToken, accessTokenExpiredTime, refreshToken } = data
  const access_token = JSON.stringify({
    accessToken,
    accessTokenExpiredTime,
  })
  const refresh_token = JSON.stringify({
    refreshToken,
  })
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
}
export const removeTokensAndRedirect = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  router.push('/login')
}
