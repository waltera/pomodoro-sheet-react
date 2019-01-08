import {getAll} from './taskActions'
import {GET_ALL} from './taskTypes'

describe('task actions', () => {
  it('should create getAll action', () => {
    const taskList = []
    const expectedAction = {
      type: GET_ALL,
      taskList
    }
    expect(getAll(taskList)).toEqual(expectedAction)
  })
})
