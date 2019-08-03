import React from 'react'
import {reduxForm} from 'redux-form'
import {
  baseStoreName,
  formStoreName,
  taskNameFormStoreName
} from '../constant'
import {RFInput} from 'utils'

class TaskNameForm extends React.Component {
  render() {
    this.props.submitFunction(this.props.handleSubmit)
    return <RFInput name="taskName" />
  }
}

export default reduxForm({
  form: taskNameFormStoreName,
  getFormState: store => store[baseStoreName][formStoreName],
  validate: values => {
    if (!values.taskName || /^\s+$/.test(values.taskName)) {
      return {
        taskName: '不能为空'
      }
    }

    return {}
  }
})(TaskNameForm)