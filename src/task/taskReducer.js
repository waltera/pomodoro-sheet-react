import {createReducer} from '../app/utils'
import {GET_ALL, EDIT} from './taskTypes'

export const initialState = {
  showModal: false,
  form: {},
  list: []
}

const getAll = (state, {taskList}) => {
  const newList = taskList.data.map(taskData => {
    const pomodoros = taskData.relationships.pomodoros.data.map(relation => {
      let pomodoro = taskList.included.find(included => {
        return relation.id == included.id && relation.type == included.type
      })

      return {
        id: pomodoro.id,
        ...pomodoro.attributes
      }
    })

    return {
      id: parseInt(taskData.id),
      ...taskData.attributes,
      pomodoros
    }
  })

  return Object.assign({}, {...state}, {list: newList})
}

const edit = (state, {id}) => {
  const task = state.list.find(task => task.id == id)
  const form = {
    id: task.id,
    description: task.description,
    pomodoros: task.pomodoros.length
  }

  return Object.assign({}, {...state}, {form})
}

export default createReducer(initialState, {
  [GET_ALL]: getAll,
  [EDIT]: edit
})
