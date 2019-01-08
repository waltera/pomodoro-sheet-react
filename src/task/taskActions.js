import {
  GET_ALL,
  EDIT,
  TASK_NEW
} from './taskTypes'

export const getAll = (taskList) => ({type: GET_ALL, taskList})
export const edit = (id) => ({type: EDIT, id})
export const taskNew = () => ({type: TASK_NEW})