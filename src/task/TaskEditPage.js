import React from 'react'
import TaskFormContainer from './TaskFormContainer'

class TaskEditPage extends React.Component {
  componentDidMount() {
    this.props.handleEdit(this.props.id)
  }

  render() {
    console.log('render inicio')
    console.log(this.props)
    console.log('render fim')
    return <TaskFormContainer {...this.props} />
  }
}

export default TaskEditPage