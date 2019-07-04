import React from 'react'
import {
  Button,
  Input,
  Table,
  Row,
  Col
} from 'antd'
import {LOGIN_SERVER_LOGIN_WEBVIEW_PAGE} from '../constant'
import {jump} from 'utils'
const { remote } = window.require('electron')


export default class extends React.Component {
  handleClickLogin = () => {
    // const win = new BrowserWindow()
    // win.loadURL('http://www.baidu.com')
    // win.webContents.openDevTools()

    // setInterval(() => {
    //   console.log(1111)
    //   win.webContents.session.cookies.get({url: 'http://www.baidu.com'}, (err, cookie) => {
    //     console.log(cookie)
    //   })
    // }, 1000)
    // location.href =
    jump(LOGIN_SERVER_LOGIN_WEBVIEW_PAGE)
  }

  renderLoginZone() {
    return (
      <div className="login-zone-wrapper">
        <Row>
          <Col span={8}>
            <Input />
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