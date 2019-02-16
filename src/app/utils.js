import {SubmissionError} from 'redux-form'

export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export const processFormRequest = ({status, data}) => {
  if (status == 400) {
    throw new SubmissionError({_error: 'Operação não realizada'})
  }

  if (status == 422) {
    console.log(data)
    throw new SubmissionError(data)
  }
}