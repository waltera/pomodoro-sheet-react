import React from 'react'
import {Route} from 'react-router-dom'
import {SubmissionError} from 'redux-form'
import TaskListPage from './TaskListPage'
import TaskNew from './TaskNew'
import TaskEditPage from './TaskEditPage'
import * as TaskApi from './taskApi'
import * as appActions from '../app/appActions'
import * as taskActions from './taskActions'

const TaskManage = ({match, ...props}) => {
  console.log(props)

  const processFormResponse = (response) => {
    switch (response.status) {
      case 400:
        return props.dispatch(appActions.showAlert('error', 'Operação não realizada'))
      case 422:
        return response.json().then(data => {
          throw new SubmissionError(data)
        })
      default:
        props.dispatch(appActions.showAlert('success', 'Message 1'))
        props.history.push('/tasks')
    }
  }
  const handleNew = (values) => {
    return TaskApi.create(values).then(processFormResponse)
  }
  const renderNew = () => {
    const componentProps = Object.assign(props, {handleNew})
    return <TaskNew {...componentProps} />
  }
  const handleLoad = (id) => {
    props.dispatch(taskActions.edit(id))
  }
  const handleEdit = (values) => {
    console.log('handleEdit')
    console.log(values)
  }
  const renderEdit = () => {
    const id = match.params.id
    const componentProps = Object.assign(props, {id, handleLoad, handleEdit})
    return <TaskEditPage {...componentProps} />
  }

  return <div>
    <Route exact path={`${match.path}`} component={TaskListPage} />
    <Route exact path={`${match.path}/new`} component={renderNew} />
    <Route exact path={`${match.path}/:id/edit`} render={renderEdit} />
  </div>
}

export default TaskManage