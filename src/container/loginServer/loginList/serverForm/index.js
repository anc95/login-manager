import View from './view'
import validate from './validate'
import { reduxForm } from 'redux-form'

export default reduxForm({
  form: 'loginServerForm',
  getFormState: store => store.loginServer.serverForm,
  validate
})(View)