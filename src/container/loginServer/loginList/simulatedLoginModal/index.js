import {connect} from 'react-redux'
import View from './view'
import {toggleSimulatedLoginModalVisible} from '../action'

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(toggleSimulatedLoginModalVisible(false)),
  showModal: () => dispatch(toggleSimulatedLoginModalVisible(true))
})

export default connect(null, mapDispatchToProps)(View)