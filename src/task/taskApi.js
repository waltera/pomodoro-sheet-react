import {API_HOST, API_HEADERS} from '../app/appTypes'
import {processFormRequest} from '../app/utils'

export const index = () => {
  fetch(API_HOST + '/tasks').then(response => {
    console.log('get')
    console.log(response)
  })
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