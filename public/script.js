(function() {
  var {ipcRenderer} = require('electron')

  function transClassNameToSelector(className) {
    if (!className) {
      return ''
    }

    var selector = '.' + className.trim().replace(/\s+/g, '.')

    return selector === '.' ? '' : selector
  }

  function getNodePath(node) {
    var path = ''

    do {
      if (node.id) {
        return '#' + node.id + ' ' + path
      }
      else {
        path = node.nodeName.toLowerCase() + transClassNameToSelector(node.className) + ' ' + path
      }
    }
    while (node = node.parentNode)

    return path.trim()
  }

  ['change', 'click'].map(eventType => {
    document.addEventListener(eventType, e => {
      ipcRenderer.sendToHost(eventType, {
        type: e.type,
        selector: getNodePath(e.srcElement),
        value: e.srcElement.value
      })
    }, true)
  })
})()