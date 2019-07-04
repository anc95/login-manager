function queryToString(query) {
  if (!query) {
    return ''
  }

  return '?' + Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&')
}

export function jump(path, query) {
  window.location.href = path + queryToString(query)
}

export function openNewPage(path, query) {
  window.open(path + queryToString(query), '_blank')
}