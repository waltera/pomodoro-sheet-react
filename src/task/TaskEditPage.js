import React from 'react'

class TaskEditPage extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
    console.log(this.props.id)
    this.props.handleEdit(this.props.id)
  }

  render() {
    return <div>Edit</div>
  }
}

export default TaskEditPage