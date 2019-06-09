import React from 'react'
import TaskForm from './TaskForm'

class TaskEditPage extends React.Component {
  componentDidMount() {
    this.props.handleEdit(this.props.id)
  }

  render() {
    console.log('render inicio')
    console.log(this.props)
    console.log('render fim')
    return <TaskForm {...this.props} />
  }
}

export default TaskEditPage