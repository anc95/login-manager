export const DELETE_TASK = 'delete task'
export const ADD_TASK = 'add task'
export const EDIT_TASK = 'edit task'
export const CANCEL_EDIT_TASK = 'cancel edit task'

export function deleteTaskById(id) {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

export function addTask(taskInfo) {
  return {
    type: ADD_TASK,
    payload: taskInfo
  }
}

export function editTask(taskInfo) {
  return {
    type: EDIT_TASK,
    payload: taskInfo
  }
}

export function cancelEditTask() {
  return {
    type: CANCEL_EDIT_TASK
  }
}