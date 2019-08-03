import {connect} from 'react-redux'
import View from './view'
import {
  toggleSimulatedLoginModalVisible,
  loginSuccess
} from '../action'
import {
  getSimulatedLoginModalStore,
  getTaskNameFormStore
} from '../getStore'

const mapStateToStatus = store => {
  const {status} = getSimulatedLoginModalStore(store)
  const {taskName} = getTaskNameFormStore(store)

  return {
    status,
    taskName
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(toggleSimulatedLoginModalVisible(false)),
  showModal: () => dispatch(toggleSimulatedLoginModalVisible(true)),
  loginSuccess: () => dispatch(loginSuccess())
})

export default connect(mapStateToStatus, mapDispatchToProps)(View)