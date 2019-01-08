import {
  getAll,
  edit,
  taskNew
} from './taskActions'
import {
  GET_ALL,
  EDIT,
  TASK_NEW
} from './taskTypes'

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

  it('taskNew action', () => {
    expect(taskNew()).toEqual({type: TASK_NEW})
  })
})
