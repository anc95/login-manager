import View from './view'
import {connect} from 'react-redux'
import {
  toggleSimulatedLoginModalVisible,
  changeLoginUrl
} from './action'
import {
  getLoginServerFormStore,
  getSimulatedLoginModalStore
} from './getStore'


const mapStateToProps = store => {
  const loginServerFormStore = getLoginServerFormStore(store)
  const simulatedLoginModalStore = getSimulatedLoginModalStore(store)

  return {
    simulatedLoginModalVisible: simulatedLoginModalStore.visible,
    loginUrl: loginServerFormStore.loginUrl
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(toggleSimulatedLoginModalVisible(false)),
  showModal: () => dispatch(toggleSimulatedLoginModalVisible(true)),
  changeLoginUrl: url => dispatch(changeLoginUrl(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(View)