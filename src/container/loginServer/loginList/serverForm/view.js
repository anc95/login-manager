import React from 'react'
import {
  Form,
  Button
} from 'antd'
import {RFInput} from 'utils'

export default props => {
  const {
    handleSubmit
  } = props

  return (
    <div className="login-zone-wrapper">
      <Form layout="inline">
        <RFInput name="loginUrl" />
        <Form.Item>
          <Button onClick={handleSubmit}>登陆</Button>
        </Form.Item>
      </Form>
    </div>
  )
}