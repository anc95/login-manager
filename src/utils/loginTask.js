/**
 * @author anchao01
 * @file 本地存储一些app数据
 * @date Aug 3, 2019 4:37:20 PM
 */
import uuidv4 from 'uuid/v4'
import path from 'path'
const fs = window.require('fs')
const {app} = window.require('electron').remote

function ensurePath (type='file') {
  return function (pathname) {
    if (fs.existsSync(pathname)) {
      if (type === 'file' && fs.statSync(pathname).isFile()) {
        return
      }

      if (type === 'directory' && fs.statSync(pathname).isDirectory()) {
        return
      }

      fs.unlinkSync(pathname)
    }

    if (type === 'file') {
      fs.writeFileSync(pathname)
    }
    else {
      fs.mkdirSync(pathname)
    }
  }
}

const ensureDir = ensurePath('directory')
const ensureFile = ensurePath('file')

const appDataPath = path.resolve(app.getPath('appData'), app.getName(), 'userData')
const loginTaskPath = path.resolve(appDataPath, 'loginTask.json')

ensureDir(appDataPath)
ensureFile(loginTaskPath)

export function getLoginTaskList() {
  console.log(fs.readFileSync(loginTaskPath, {encoding: 'utf8'}))
  return JSON.parse(fs.readFileSync(loginTaskPath, {encoding: 'utf8'}) || '[]')
}

function saveLoginTaskList(loginTaskList) {
  fs.writeFileSync(loginTaskPath, JSON.stringify(loginTaskList))
}

function getTaskById(id) {
  const list = getLoginTaskList()
  return list.find(item => item.id === id)
}

function saveTask(task) {
  const list = getLoginTaskList()
  const taskIndex = list.findIndex(item => item.id === task.id)

  if (taskIndex !== -1) {
    list.splice(taskIndex, 1, task)
    saveLoginTaskList(list)
  }
}

export function addTask(taskInfo) {
  taskInfo.id = uuidv4()
  saveLoginTaskList(getLoginTaskList().concat([taskInfo]))
}

export function modifyTask(id, newTaskInfo) {
  saveTask({
    ...getTaskById(id),
    ...newTaskInfo,
    id
  })
}

