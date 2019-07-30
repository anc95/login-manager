export const SIMULATED_LOGIN_MODAL_VISIBLE_CHANGE = 'simulated login modal visible change'

export function toggleSimulatedLoginModalVisible(visible) {
  return {
    type: SIMULATED_LOGIN_MODAL_VISIBLE_CHANGE,
    payload: visible
  }
}