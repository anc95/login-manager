export const SIMULATED_LOGIN_MODAL_VISIBLE_CHANGE = 'simulated login modal visible change'
export const SIMULATED_LOGIN_MODAL_STATUS_CHANGE = 'simulated login modal status change'

export function toggleSimulatedLoginModalVisible(visible) {
  return {
    type: SIMULATED_LOGIN_MODAL_VISIBLE_CHANGE,
    payload: visible
  }
}

export function loginSuccess() {
  return {
    type: SIMULATED_LOGIN_MODAL_STATUS_CHANGE,
    payload: 'success'
  }
}

export function loginError() {
  return {
    type: SIMULATED_LOGIN_MODAL_STATUS_CHANGE,
    payload: 'error'
  }
}