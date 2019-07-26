import View from './view'
import {connect} from 'react-redux'

const mapStateToProps = state => (console.log(state.loginServer.serverForm) || {
  loginUrl: state.loginServer.serverForm.loginUrl
})

export default connect(mapStateToProps)(View)