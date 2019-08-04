import { reducer as reduxFormReducer } from 'redux-form';
import {combineReducers} from 'redux'
import simulatedLoginModalReducer from './simulatedLoginModalReducer'
import taskListReducer from './taskListReducer'
import {
  baseStoreName,
  formStoreName,
  simulatedLoginModalStoreName,
  taskListStoreName
} from '../constant'

export default {
  [baseStoreName]: combineReducers({
    [formStoreName]: reduxFormReducer,
    [simulatedLoginModalStoreName]: simulatedLoginModalReducer,
    [taskListStoreName]: taskListReducer
  })
}