import * as actions from './taskActions'
import * as types from './taskTypes'

describe('task actions', () => {
  it('should create addTask action', () => {
    const description = 'Card 1'
    const expectedAction = {
      type: types.ADD_TASK,
      description
    }
    expect(actions.addTask(description)).toEqual(expectedAction)
  })
})
