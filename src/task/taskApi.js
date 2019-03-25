import {API_HOST, API_HEADERS} from '../app/appTypes'

export const index = () => {
  fetch(API_HOST + '/tasks').then(response => {
    console.log('get')
    console.log(response)
  })
}

export const show = (id) => {
  return fetch(API_HOST + '/tasks/' + id).then(response => {
    return response.json().then(data => {
      return data
    })
  })
}

export const create = (values) => {
  return fetch(API_HOST + '/tasks', {
    method: 'POST',
    headers: API_HEADERS,
    body: JSON.stringify({task: values})
  })
}

export const update = (id, values) => {
  return fetch(API_HOST + '/tasks/' + id, {
    method: 'PUT',
    headers: API_HEADERS,
    body: JSON.stringify({task: values})
  })
}