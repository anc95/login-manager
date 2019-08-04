import {
  getLoginTaskList,
  deleteTask,
  addTask
} from 'utils/loginTask'
import {message} from 'antd'
import {DELETE_TASK, ADD_TASK} from '../action'

const initialState = {
  taskList: getLoginTaskList()
}

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case DELETE_TASK: {
      const taskInfo = deleteTask(payload)
      message.success(`删除任务${taskInfo.name}成功`)
      return {
        ...initialState,
        taskList: getLoginTaskList()
      }
    }

    case ADD_TASK: {
      const taskInfo = addTask(payload)
      message.success(`添加任务${taskInfo.name}成功`)
      return {
        ...initialState,
        taskList: getLoginTaskList()
      }
    }
  }

  return state
}