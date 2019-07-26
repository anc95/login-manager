import {observable} from 'mobx'
import {BaseState, jump} from '../../../utils'

export default class State extends BaseState {
  props
  @observable urlValue = ''

  constructor(props) {
    super(props)
    this.props = props
  }

  // ========== event handler ==========

  handleInputChange = val => {
    this.setState('urlValue', val)
  }

  handleClickLogin = val => {
    // const win = new BrowserWindow()
    // win.loadURL('http://www.baidu.com')
    // win.webContents.openDevTools()

    // setInterval(() => {
    //   console.log(1111)
    //   win.webContents.session.cookies.get({url: 'http://www.baidu.com'}, (err, cookie) => {
    //     console.log(cookie)
    //   })
    // }, 1000)
    // location.href =
    jump(`${this.props.match.url}/${decodeURIComponent(this.urlValue)}`)
  }
}