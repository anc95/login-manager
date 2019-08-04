import React from 'react'
import {
  Card,
  Icon,
  Avatar,
  Row,
  Col,
  Popconfirm,
  Drawer
} from 'antd'
import './style.scss'

const Meta = Card.Meta

export default class TaskList extends React.Component {
  renderEditDrawer() {
    const {inEditMode, editTaskInfo, cancelEditTask} = this.props

    return (
      <Drawer
        title="Create a new account"
        width={720}
        onClose={cancelEditTask}
        visible={inEditMode}
      >
        {JSON.stringify(editTaskInfo)}
      </Drawer>
    )
  }

  renderDeleteIcon(taskId) {
    const {deleteTask} = this.props

    return (
      <Popconfirm
        title="确认删除吗"
        onConfirm={() => deleteTask(taskId)}
        okText="确认"
        cancelText="取消"
      >
        <Icon type="delete" />
      </Popconfirm>
    )
  }

  renderOneTask(task) {
    const {editTask} = this.props

    return (
      <div className="task-wrapper">
        <Card
          key={task.id}
          hoverable={true}
          style={{ width: 300 }}
          actions={[
            <Icon type="play-circle" />,
            <Icon type="edit" onClick={() => editTask(task)} />,
            <Icon type="copy" />,
            this.renderDeleteIcon(task.id)
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={task.name}
            description={task.url}
          />
        </Card>
      </div>
    )
  }

  renderTaskList() {
    const {taskList} = this.props
    return (
      <Row type="flex">
        {taskList.map(task => (
          <Col key={taskList.id} xs={10} sm={10} md={10} lg={8} xl={8}>
            {this.renderOneTask(task)}
          </Col>
        ))}
      </Row>
    )
  }

  render() {
    return (
      <div className="task-list-wrapper">
        {this.renderTaskList()}
        {this.renderEditDrawer()}
      </div>
    )
  }
}
