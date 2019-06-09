// import {SubmissionError} from 'redux-form'

export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

// export const processFormResponse = (response) => {
//   if (response.ok) { return }

//   return response.json().then(data => {
//     console.log(data)
//     // throw new SubmissionError(data)
//   })
// }