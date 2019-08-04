import {connect} from 'react-redux'
import View from './view'
import {getTaskListStore} from '../getStore'
import {
  deleteTaskById,
  editTask,
  cancelEditTask
} from '../action'

const mapStateToProps = store => {
  const {
    taskList,
    inEditMode,
    editTaskInfo
  } = getTaskListStore(store)

  return {
    taskList,
    inEditMode,
    editTaskInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTask: taskInfo => dispatch(editTask(taskInfo)),
    deleteTask: id => dispatch(deleteTaskById(id)),
    cancelEditTask: () => dispatch(cancelEditTask()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)