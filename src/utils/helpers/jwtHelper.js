/**
 * Store accessToken in localStorage as named "access_token"
 * @param {{accessToken:string}} data
 */
export function storeJWT(data) {
  if (data?.accessToken) {
    localStorage.setItem('access_token', data.accessToken)
  }
}

/**
 * Will remove "access_token" in localStorage
 */
export function removeTokens() {
  localStorage.removeItem('access_token')
}

/**
 *
 * @returns {boolean} Does localStorage cantain "access_token"
 */
export function checkIsLogin() {
  return !!localStorage.getItem('access_token')
}
