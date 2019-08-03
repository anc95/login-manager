import {
  SIMULATED_LOGIN_MODAL_VISIBLE_CHANGE,
  SIMULATED_LOGIN_MODAL_STATUS_CHANGE
} from '../action'

const initialState = {
  visible: false,
  status: ''  // 'success' | 'error'
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case SIMULATED_LOGIN_MODAL_VISIBLE_CHANGE: {
      return {
        ...state,
        visible: !!payload
      }
    }

    case SIMULATED_LOGIN_MODAL_STATUS_CHANGE: {
      return {
        ...state,
        status: payload
      }
    }

    default:
      return state
  }
}