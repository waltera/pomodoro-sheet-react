import { createReducer } from '../app/utils'
import * as types from './taskTypes'

const initialState = {
  show: undefined,
  list: []
}

const addTask = (state, { description }) => {
  const newList = [...state.list, {description: description}]
  return Object.assign({}, ...state, { list: newList })
}

export default createReducer(initialState, {
  [types.ADD_TASK]: addTask
})
