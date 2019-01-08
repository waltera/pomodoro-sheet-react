import {GET_ALL, SHOW} from './taskTypes'

export const getAll = (taskList) => ({type: GET_ALL, taskList})
export const show = (id) => ({type: SHOW, id})