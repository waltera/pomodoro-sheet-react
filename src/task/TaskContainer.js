import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {SubmissionError} from 'redux-form'
import {edit, submitForm} from './taskActions'
import TaskManage from './TaskManage'
import * as TaskApi from './taskApi'

const mapStateToProps = (state) => ({
  tasks: state.task.list
})

const mapDispatchToProps = (dispatch) => {
  return {
    editHandler: (taskId) => {
      dispatch(edit(taskId))
    },
    handleNew: (values) => {
      return TaskApi.create(values).then(() => {
        console.log('sucesso')
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskManage))