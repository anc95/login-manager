/**
 * @author anchao01
 * @file 模拟登陆页面
 * @date Jul 26, 2019 6:03:06 PM
 */
import React from 'react'

export default (props) => {
  console.log('dsadasdsadsadsdasdsds')
  const loginUrl = decodeURIComponent(props.match.params.loginUrl)
  return <webview src={loginUrl}></webview>
}