import { combineReducers } from 'redux'
import home from '../home/HomeReducer'
import task from '../task/taskReducer'

export default combineReducers({
  home,
  task
})
