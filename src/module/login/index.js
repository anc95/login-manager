import React from 'react'
import ListPage from './listPage'
import LoginWebviewPage from './loginWebviewPage'
import {Switch, Route, Redirect} from 'react-router-dom'

export const base = '/login-server'

export default (props) => {
  const match = props.match

  return (
    <div className="login-wrapper">
      <Switch>
        <Route exact path={match.path} component={ListPage}/>
        <Route path={`${match.path}/:loginUrl`} component={LoginWebviewPage}/>
      </Switch>
    </div>
  )
}