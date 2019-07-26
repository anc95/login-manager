import React from 'react'
import LoginList from './loginList'
import {Switch, Route, Redirect} from 'react-router-dom'
import SimulatedLogin from './simulatedLogin'

export const base = '/login-server'

export default (props) => {
  const match = props.match

  return (
    <div className="login-wrapper">
      <Switch>
        <Route exact path={match.path} component={LoginList}/>
        <Route path={`${match.path}/:loginUrl`} component={SimulatedLogin}/>
      </Switch>
    </div>
  )
}