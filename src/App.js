import React from 'react'
import { Menu, Icon } from 'antd';
import {Route, Link, Redirect} from 'react-router-dom'
import {base, default as LoginLayout} from './container/loginServer'
import './App.css'


export default class App extends React.Component {
  state = {
    current: 'login',
  };

  handleClick = e => {
    this.setState({current: e.key})
  }

  renderMenu() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="login">
          <Link to={base}>
            <Icon type="login" /> 登陆服务
          </Link>
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    return (
      <div>
        {this.renderMenu()}
        <div className='app-content-wrapper'>
          <Route path={base} component={LoginLayout} />
          <Redirect to={base} />
        </div>
      </div>
    )
  }
}