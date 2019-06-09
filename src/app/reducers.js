import { combineReducers } from 'redux'
import app from './appReducer'
import timer from '../timer/timerReducer'
import task from '../task/taskReducer'

export default combineReducers({
  app,
  timer,
  task
})
