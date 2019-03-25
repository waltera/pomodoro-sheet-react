import {
  GET_ALL,
  EDIT,
  TASK_NEW,
  HANDLE_NEW,
  HANDLE_EDIT
} from './taskTypes'

export const getAll = (taskList) => ({type: GET_ALL, taskList})
export const edit = (id) => ({type: EDIT, id})
export const handleEdit = (form) => ({type: HANDLE_EDIT, form})