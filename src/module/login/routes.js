import ListPage from './listPage'
import LoginWebviewPage from './loginWebviewPage'

import {LOGIN_SERVER_HOME_PAGE, LOGIN_SERVER_LOGIN_WEBVIEW_PAGE} from './constant'

export default [
  {
    path: LOGIN_SERVER_HOME_PAGE,
    component: ListPage
  },
  {
    path: LOGIN_SERVER_LOGIN_WEBVIEW_PAGE,
    component: LoginWebviewPage
  }
];