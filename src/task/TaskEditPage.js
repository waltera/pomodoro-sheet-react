import React from 'react'

class TaskEditPage extends React.Component {
  componentDidMount() {
    this.props.editHandler(this.props.match.params.id)
  }

  render() {
    return <div>Edit</div>
  }
}

export default TaskEditPage