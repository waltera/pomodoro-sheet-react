import {createReducer} from '../app/utils'
import {setValue} from '../form/formReducer'
import {
  GET_ALL,
  HANDLE_EDIT,
  FORM_SET_VALUE
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

export default createReducer(initialState, {
  [GET_ALL]: getAll,
  [FORM_SET_VALUE]: setValue
})
