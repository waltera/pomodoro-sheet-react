import {connect} from 'react-redux'
import {processFormResponse} from '../app/utils'
import * as appActions from '../app/appActions'
import * as TaskApi from './taskApi'
import TaskFormContainer from './TaskFormContainer'

const mapStateToProps = (state) => ({title: 'Novo'})

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    onSubmit: (values) => {
      return TaskApi.create(values)
        .then(processFormResponse)
        .then(() => {
          console.log('sucesso')
          dispatch(appActions.showAlert('success', 'Message 1'))
        }).catch((err) => {
          dispatch(appActions.showAlert('error', 'Operação não realizada'))
          console.log('erro')
          throw err
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer)