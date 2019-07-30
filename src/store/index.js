import {createStore, combineReducers} from 'redux'

function getReducers() {
  const r = require.context('../container', true, /reducer(\.js)?$/)

  return r.keys().reduce(
    (reducers, key) => ({
      ...reducers,
      ...r(key).default
    }),
    {}
  )
}

export default createStore(combineReducers(getReducers()))