import {GET_ALL} from './taskTypes'

export function getAll(taskList) {
  return { type: GET_ALL, taskList }
}