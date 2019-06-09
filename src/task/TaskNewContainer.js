import {connect} from 'react-redux'
import TaskForm from './TaskForm'
import * as taskActions from './taskActions'

const mapStateToProps = (state) => {
  return {
    title: 'Novo',
    form: state.task.form
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (event) => {
      event.preventDefault()
      console.log(ownProps)
      dispatch(taskActions.handleCreate())
    },
    setValue: (name, value) => {
      console.log('TaskNewContainer setValue')
      console.log(taskActions)
      console.log(name)
      console.log(value)
      dispatch(taskActions.setFormValue(name, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)