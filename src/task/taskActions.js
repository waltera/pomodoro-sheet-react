import * as types from './taskTypes'

export function addTask(description) {
  return { type: types.ADD_TASK, description }
}
