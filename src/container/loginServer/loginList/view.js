import React from 'react'
import {withRouter} from 'react-router-dom'
import ServerForm from './serverForm'
import {jump} from 'utils'
// const { remote } = window.require('electron')

const handleSubmit = (props, loginUrl) => {
  const {
    match: {
      url
    },
    history
  } = props

  history.push(`${url}/${encodeURIComponent(loginUrl)}`)
}

const ServerList = props => {
  return (
    <div className="login-server-list-wrapper">
      <ServerForm onSubmit={value => handleSubmit(props, value.loginUrl)} />
    </div>
  )
}

export default withRouter(ServerList)