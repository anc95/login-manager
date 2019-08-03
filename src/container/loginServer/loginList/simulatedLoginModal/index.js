import {connect} from 'react-redux'
import View from './view'
import {
  toggleSimulatedLoginModalVisible,
  loginSuccess
} from '../action'
import {getSimulatedLoginModalStore} from '../getStore'


const mapStateToStatus = store => {
  const {status} = getSimulatedLoginModalStore(store)
  return {
    status
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(toggleSimulatedLoginModalVisible(false)),
  showModal: () => dispatch(toggleSimulatedLoginModalVisible(true)),
  loginSuccess: () => dispatch(loginSuccess())
})

export default connect(mapStateToStatus, mapDispatchToProps)(View)