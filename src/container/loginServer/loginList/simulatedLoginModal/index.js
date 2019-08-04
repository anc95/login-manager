import {connect} from 'react-redux'
import View from './view'
import {
  toggleSimulatedLoginModalVisible,
  loginSuccess,
  addTask
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
  loginSuccess: () => dispatch(loginSuccess()),
  addTask: (taskInfo) => dispatch(addTask(taskInfo))
 })

export default connect(mapStateToStatus, mapDispatchToProps)(View)