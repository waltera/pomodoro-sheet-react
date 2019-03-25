import {createReducer} from '../app/utils'
import {
  GET_ALL,
  HANDLE_EDIT
} from './taskTypes'

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

const handleEdit = (state, {form}) => {
  console.log('handleEdit inicio')
  // const pomodoro = {
  //   id: form.data.id,
  //   ...form.data.attributes
  // }
  const pomodoro = { description: 'Teste', pomodoros: 2 }
  console.log(Object.assign({}, {...state}, {form: pomodoro}))
  console.log('handleEdit fim')
  return Object.assign({}, {...state}, {form: pomodoro})
}

export default createReducer(initialState, {
  [GET_ALL]: getAll,
  [HANDLE_EDIT]: handleEdit
})
