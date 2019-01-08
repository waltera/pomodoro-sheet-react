import {getAll, show} from './taskActions'
import {GET_ALL, SHOW} from './taskTypes'

describe('task actions', () => {
  it('getAll action', () => {
    const taskList = []
    const expectedAction = {
      type: GET_ALL,
      taskList
    }
    expect(getAll(taskList)).toEqual(expectedAction)
  })

  it('show action', () => {
    const id = 1
    const expectedAction = {
      type: SHOW,
      id
    }
    expect(show(id)).toEqual(expectedAction)
  })
})
