import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import timer from '../timer/timerReducer'
import task from '../task/taskReducer'

export default combineReducers({
  form: formReducer,
  timer,
  task
})
