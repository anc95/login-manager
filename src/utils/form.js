import {Field} from 'redux-form'
import {
  Form,
  Input,
  Button
} from 'antd'
import React from 'react'

const FormItem = Form.Item

const getValidateStatus = (meta = {}) => {
  if (meta.touched) {
    if (meta.valid) {
      return 'success'
    }

    return 'error'
  }

  return ''
}

const getValidateErrorInfo = (meta = {}) => {
  if (getValidateStatus(meta) === 'error') {
    return meta.error
  }
}

export const asReduxFormField = AComp => {
  const renderField = (
    {
      meta,
      input,
      help,
      extraProps
    }
  ) => {
    return (
      <FormItem
        validateStatus={getValidateStatus(meta)}
        help={getValidateErrorInfo(meta) || help}
      >
        <AComp {...input} {...extraProps} />
      </FormItem>
    )
  }

  return props => <Field {...props} component={renderField} />
}

export const RFInput = asReduxFormField(Input)