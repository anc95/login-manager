
export default function (values) {
  if (!/^http(s)?:\/\/[a-z0-9A-Z-_\/\.\?\&\#]+$/.test(values.loginUrl)) {
    return {
      loginUrl: '请输入正确的url地址'
    }
  }

  return {}
}