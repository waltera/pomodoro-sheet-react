import {GET_ALL, EDIT} from './taskTypes'

export const getAll = (taskList) => ({type: GET_ALL, taskList})
export const edit = (id) => ({type: EDIT, id})