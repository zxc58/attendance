import router from '../../router'
export const storeJWT = (data) => {
  const { accessToken, accessTokenExpiredTime, refreshToken, userId } = data
  const access_token = JSON.stringify({
    accessToken,
    accessTokenExpiredTime,
  })
  localStorage.setItem('userId', userId)
  localStorage.setItem('access_token', access_token)
  if (refreshToken) {
    const refresh_token = JSON.stringify({
      refreshToken,
    })
    localStorage.setItem('refresh_token', refresh_token)
  }
}
export const removeTokensAndRedirect = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('userId')
  router.push('/login')
}
