export const DELETE_TASK = 'delete task'
export const ADD_TASK = 'add task'

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