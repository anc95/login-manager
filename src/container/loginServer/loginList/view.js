import React from 'react'
import {withRouter} from 'react-router-dom'
import ServerForm from './serverForm'
import SimulatedLoginModal from './simulatedLoginModal'
import TaskList from './taskList'

const handleSubmit = (props, url) => {
  const {
    changeLoginUrl,
    showModal
  } = props

  changeLoginUrl(url)
  showModal()
}

const ServerList = props => {
  const {
    simulatedLoginModalVisible,
    loginUrl
  } = props

  return (
    <div className="login-server-list-wrapper">
      <ServerForm onSubmit={form => handleSubmit(props, form.loginUrl)} />
      <TaskList />
      <SimulatedLoginModal onSubmit={() => {}} loginUrl={loginUrl} visible={simulatedLoginModalVisible} />
    </div>
  )
}

export default withRouter(ServerList)