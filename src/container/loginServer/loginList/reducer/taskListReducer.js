import {
  getLoginTaskList,
  deleteTask,
  addTask,
} from 'utils/loginTask'
import {message} from 'antd'
import {
  DELETE_TASK,
  ADD_TASK,
  EDIT_TASK,
  CANCEL_EDIT_TASK
} from '../action'

const initialState = {
  taskList: getLoginTaskList(),
  inEditMode: false,
  editTaskInfo: null
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

    case EDIT_TASK: {
      return {
        ...initialState,
        inEditMode: true,
        editTaskInfo: payload
      }
    }

    // 取消编辑
    case CANCEL_EDIT_TASK: {
      return {
        ...initialState,
        inEditMode: false,
        editTaskInfo: null
      }
    }
  }

  return state
}