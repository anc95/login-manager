import {
  SIMULATED_LOGIN_MODAL_VISIBLE_CHANGE
} from '../action'

const initialState = {
  visible: false
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case SIMULATED_LOGIN_MODAL_VISIBLE_CHANGE: {
      return {
        ...state,
        visible: !!payload
      }
    }

    default:
      return state
  }
}