export const CHANGE_LOGIN_URL = 'change login url'

export const changeLoginUrl = payload => {
  return {
    type: CHANGE_LOGIN_URL,
    payload
  }
}