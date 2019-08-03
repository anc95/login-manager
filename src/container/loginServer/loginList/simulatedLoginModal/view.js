import React from 'react'
import propTypes from 'prop-types'
import {
  Modal, Result
} from 'antd'
import {TaskStream} from 'utils/TaskStream'
import {addTask} from 'utils/loginTask'
import {RFInput} from 'utils'

export default class extends React.Component {
  static propTypes = {
    loginUrl: propTypes.string,
    visible: propTypes.bool,
    onCancel: propTypes.func
  }
  canCaptureWebview = false

  componentWillReceiveProps(nextProps) {
    this.canCaptureWebview = !this.props.visible && nextProps.visible
  }

  componentDidUpdate() {
    if (this.canCaptureWebview) {
      this.taskStream = new TaskStream()
      setTimeout(() => {
        const webview = document.querySelector('webview')
        webview.addEventListener('ipc-message', e => this.taskStream.push(e.args[0]))
      });
    }
  }

  handleOk = () => {
    const {loginSuccess} = this.props

    addTask(this.taskStream)
    loginSuccess()
  }

  renderSuccessResult() {
    return (
      <Result
        status="success"
        title="录取页面操作动作指令成功"
        subTitle="请给该操作起一个方便记住的名字吧"
        extra={[
          // <RFInput />
        ]}
      />
    )
  }

  renderModalContent() {
    const {
      loginUrl,
      status
    } = this.props

    if (status === 'success') {
      return this.renderSuccessResult()
    }

    return (
      <webview
        src={loginUrl}
        ref={r => this.webview = r}
        style={{width:'100%', height: '50vh'}}
        disablewebsecurity={"true"}
        preload="file:///Users/anchao01/code/gitlab/login-manager/public/script.js"
      ></webview>
    )
  }

  render() {
    const {
      visible,
      hideModal
    } = this.props

    return (
      <div className="simulated-login-modal-wrapper">
        <Modal
          title="模拟登录"
          width={800}
          visible={visible}
          onCancel={hideModal}
          onOk={this.handleOk}
        >
          {this.renderModalContent()}
        </Modal>
      </div>
    )
  }
}