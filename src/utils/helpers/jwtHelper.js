/**
 * Store accessToken in localStorage as named "access_token"
 * and store refreshToken as named "refreshToken"
 * @param {{accessToken:string}} data
 */
export function storeJWT(data) {
  const { accessToken: access_token } = data
  if (access_token) {
    localStorage.setItem('access_token', access_token)
  }
}

/**
 * Will remove "access_token" and "refresh_token" in localStorage
 */
export function removeTokens() {
  localStorage.removeItem('access_token')
}

/**
 *
 * @returns {boolean} Does localStorage cantain "access_token" and "refresh_token"
 */
export function checkIsLogin() {
  const accessToken = localStorage.getItem('access_token')
  return !!accessToken
}
