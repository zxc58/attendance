/**
 * Store accessToken in localStorage as named "access_token"
 * and store refreshToken as named "refreshToken"
 * @param {{accessToken:string,refreshToken:string}} data
 */
export function storeJWT(data) {
  const { accessToken: access_token, refreshToken: refresh_token } = data
  if (access_token) {
    localStorage.setItem('access_token', access_token)
  }
  if (refresh_token) {
    localStorage.setItem('refresh_token', refresh_token)
  }
}

/**
 * Will remove "access_token" and "refresh_token" in localStorage
 */
export function removeTokens() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

/**
 *
 * @returns {boolean} Does localStorage cantain "access_token" and "refresh_token"
 */
export function checkIsLogin() {
  const access_token = localStorage.getItem('access_token')
  const refresh_token = localStorage.getItem('refresh_token')
  return !!(access_token && refresh_token)
}
