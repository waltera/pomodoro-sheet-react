import React from 'react'
import TaskFormContainer from './TaskFormContainer'

export const TaskNew = ({handleNew}) => {
  return <TaskFormContainer title="Novo" onSubmit={handleNew} />
}

export default TaskNew