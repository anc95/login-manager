import React from 'react'
import propTypes from 'prop-types'
import {
  Modal
} from 'antd'

export default class extends React.Component {
  static propTypes = {
    loginUrl: propTypes.string,
    visible: propTypes.bool,
    onCancel: propTypes.func
  }

  renderModalContent() {
    const {
      loginUrl
    } = this.props

    return (
      <webview src={loginUrl} style={{width:'100%', height: '50vh'}}></webview>
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
          title="模拟登陆"
          width={800}
          visible={visible}
          onCancel={hideModal}
        >
          {this.renderModalContent()}
        </Modal>
      </div>
    )
  }
}