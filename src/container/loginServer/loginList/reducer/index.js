import { reducer as reduxFormReducer } from 'redux-form';
import {combineReducers} from 'redux'
import simulatedLoginModalReducer from './simulatedLoginModalReducer'
import {
  baseStoreName,
  formStoreName,
  simulatedLoginModalStoreName
} from '../constant'

export default {
  [baseStoreName]: combineReducers({
    [formStoreName]: reduxFormReducer,
    [simulatedLoginModalStoreName]: simulatedLoginModalReducer
  })
}