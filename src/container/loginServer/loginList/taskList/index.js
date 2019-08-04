import {connect} from 'react-redux'
import View from './view'
import {getTaskListStore} from '../getStore'
import {deleteTaskById} from '../action'

const mapStateToProps = store => {
  const {taskList} = getTaskListStore(store)

  return {
    taskList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(deleteTaskById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)