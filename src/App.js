import React from 'react'
import { Menu, Icon } from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import moduleRoutes from './module/routes'


class AppContainer extends React.Component {
  state = {
    current: 'login',
  };

  renderMenu() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="login">
          <Icon type="login" />
          登陆服务
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    return (
      <div>
        {this.renderMenu()}
        <div className="app-content-wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default function App() {
  return (
    <AppContainer>
      <Router>
        {
          moduleRoutes.map(route => {
            return <Route path={route.path} component={route.component}></Route>
          })
        }
      </Router>
    </AppContainer>
  )
}
