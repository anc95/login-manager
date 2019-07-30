import { reduxForm } from 'redux-form'
import View from './view'
import validate from './validate'
import {
  baseStoreName,
  formStoreName,
  serverFormStoreName
} from '../constant'

export default reduxForm({
  form: serverFormStoreName,
  getFormState: store => store[baseStoreName][formStoreName],
  validate
})(View)