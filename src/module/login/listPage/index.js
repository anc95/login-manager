import React from 'react'
import {
  Button,
  Input,
  Table,
  Row,
  Col
} from 'antd'

export default class extends React.Component {
  renderLoginZone() {
    return (
      <div className="login-zone-wrapper">
        <Row>
          <Col span="8">
            <Input />
          </Col>
          <Col span="4">
            <Button>登陆</Button>
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    return <div class="login-server-list-wrapper">
      {this.renderLoginZone()}
    </div>
  }
}