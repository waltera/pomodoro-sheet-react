import {SubmissionError} from 'redux-form'
import {API_HOST, API_HEADERS} from '../app/appTypes'

export const index = () => {
  fetch(API_HOST + '/tasks').then(response => {
    console.log('get')
    console.log(response)
  })
}

const processFormRequest = ({status, data}) => {
  if (status == 400) {
    throw new SubmissionError({_error: 'Operação não realizada'})
  }

  if (status == 422) {
    console.log(data)
    throw new SubmissionError(data)
  }
}

export const create = (values) => {
  console.log(values)
  return fetch(API_HOST + '/tasks', {
    method: 'POST',
    headers: API_HEADERS,
    body: JSON.stringify({task: values})
  }).then(response => {    
    return response.json().then(data => {
      processFormRequest({status: response.status, data: data})      
    })
  })
}