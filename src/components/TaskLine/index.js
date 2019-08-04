import React from 'react'
import {Timeline, Icon} from 'antd'

/**
 * tasks []
 *  _i: {}
 *    name: string
 *    status: string, '' | pending | error | done
 *    errorMessage: string, default:'出错了'
 */
export default class extends React.Component {
  getTimelineDot(task) {
    switch (task.status) {
      case 'pending': {
        return <Icon type="loading" />
      }
      case 'error': {
        return <Icon type="close-circle" style={{color: 'red'}} />
      }
      case 'done': {
        return <Icon type="check-circle" style={{color: 'green'}} />
      }
      default: {
        return <Icon type="android" />
      }
    }
  }

  renderTimeLine() {
    const tasks = this.props.tasks
    if (!tasks) {
      return null
    }

    return (
      <Timeline>
        {
          tasks.map(task => (
            <Timeline.Item
              dot={this.getTimelineDot(task)}
            >
              {task.name}
            </Timeline.Item>
          ))
        }
      </Timeline>
    )
  }

  render() {
    return (
      <div className="task-line-wrapper">
        {this.renderTimeLine()}
      </div>
    )
  }
}