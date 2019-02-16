import React from 'react'
import TaskFormContainer from './TaskFormContainer'

export const TaskNew = ({handleNew}) => {
  return <div>
    <h1>Novo</h1>
    <TaskFormContainer onSubmit={handleNew} />
  </div>
}

export default TaskNew