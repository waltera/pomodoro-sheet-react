import {getAll, edit} from './taskActions'
import {GET_ALL, EDIT} from './taskTypes'

describe('task actions', () => {
  it('getAll action', () => {
    const taskList = []
    const expectedAction = {
      type: GET_ALL,
      taskList
    }
    expect(getAll(taskList)).toEqual(expectedAction)
  })

  it('edit action', () => {
    const id = 1
    const expectedAction = {
      type: EDIT,
      id
    }
    expect(edit(id)).toEqual(expectedAction)
  })
})
