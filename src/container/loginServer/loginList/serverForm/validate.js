export default function (values) {
  if (!/^http(s)?:\/\/.+$/.test(values.loginUrl)) {
    return {
      loginUrl: '请输入正确的url地址'
    }
  }

  return {}
}