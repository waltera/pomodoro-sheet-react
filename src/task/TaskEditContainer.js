import {connect} from 'react-redux'
import * as TaskApi from './taskApi'
import * as appActions from '../app/appActions'
import * as taskActions from './taskActions'
import TaskEditPage from './TaskEditPage'

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps inicio')
  console.log(state.task.form)
  console.log('mapStateToProps fim')
  return {
    id: 1,
    title: 'Editar'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleEdit: (id) => {
    dispatch(taskActions.edit(id))
  },
  onSubmit: (values) => {
    console.log(ownProps)
    return TaskApi.update(ownProps.id, values)
      .then(processFormResponse)
      .then(() => {
        console.log('sucesso')
        dispatch(appActions.showAlert('success', 'Message 1'))
      }).catch((err) => {
        dispatch(appActions.showAlert('error', 'Operação não realizada'))
        console.log('erro')
        throw err
      })
  },
  load: () => {
    return {
      description: 'Load'
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditPage)