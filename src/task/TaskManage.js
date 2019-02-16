import React from 'react'
import {Route, FadeIn} from 'react-router-dom'
import TaskListPage from './TaskListPage'
import TaskNew from './TaskNew'
import TaskEditPage from './TaskEditPage'

const TaskManage = ({match, ...props}) => {
  const TaskManageRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={routeProps => (
      <FadeIn>
        <Component {...routeProps}/>
      </FadeIn>
    )}/>
  )

  const renderNew = () => {
    return <TaskNew {...props} />
  }

  const renderEdit = (routeProps) => {
    const componentProps = Object.assign(routeProps, props)
    return <TaskEditPage {...componentProps} />
  }

  return <div>
    <Route exact path={`${match.path}`} component={TaskListPage} />
    <Route exact path={`${match.path}/new`} component={renderNew} />
    <Route exact path={`${match.path}/:id/edit`} render={renderEdit} />
  </div>
}

export default TaskManage