import React from 'react'
import {observer} from 'mobx-react'
import {
  Button,
  Input,
  Table,
  Row,
  Col
} from 'antd'
import State from './state'
import {LOGIN_SERVER_LOGIN_WEBVIEW_PAGE} from '../constant'
import {jump} from '../../../utils'
// const { remote } = window.require('electron')

@observer
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.localState = new State(props)
  }

  renderLoginZone() {
    const localState = this.localState

    return (
      <div className="login-zone-wrapper">
        <Row>
          <Col span={8}>
            <Input
              value={localState.urlValue}
              onChange={localState.handleClickLogin}
            />
          </Col>
          <Col span={4} offset={1}>
            <Button onClick={this.handleClickLogin}>
              登陆
            </Button>
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    return <div className="login-server-list-wrapper">
      {this.renderLoginZone()}
    </div>
  }
}