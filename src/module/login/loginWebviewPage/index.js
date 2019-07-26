import React from 'react'

export default class extends React.Component {
  render() {
    return <webview src={this.props.match.params.loginUrl}></webview>
  }
}