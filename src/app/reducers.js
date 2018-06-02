import { combineReducers } from 'redux'
import home from '../home/homeReducer'
import task from '../task/taskReducer'

export default combineReducers({
  home,
  task
})
