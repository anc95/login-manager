export const LOGIN_URL_CHANGE = 'LOGIN_URL_CHANGE'

export function changeLoginUrl(newUrl) {
  return {
    type: LOGIN_URL_CHANGE,
    payload: newUrl
  }
}