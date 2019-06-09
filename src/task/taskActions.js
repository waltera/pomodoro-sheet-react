import {
  GET_ALL,
  EDIT,
  FORM_SET_VALUE,
  HANDLE_CREATE,
  HANDLE_UPDATE
} from './taskTypes'

export const getAll = (taskList) => ({type: GET_ALL, taskList})
export const edit = (id) => ({type: EDIT, id})
export const setFormValue = (name, value) => ({type: FORM_SET_VALUE, name, value})
export const handleCreate = () => ({type: HANDLE_CREATE})
export const handleUpdate = (form) => ({type: HANDLE_UPDATE, form})