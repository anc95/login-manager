import get from 'lodash/get'
import {
  baseStoreName,
  simulatedLoginModalStoreName,
  serverFormStoreName,
  formStoreName
} from './constant'

// 获取弹窗store
export const getSimulatedLoginModalStore = store => store[baseStoreName][simulatedLoginModalStoreName]
// 获取serverForm store
export const getLoginServerFormStore = store => get(store[baseStoreName][formStoreName], `${serverFormStoreName}.values`, {})