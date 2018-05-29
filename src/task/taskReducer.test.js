import reducer from './taskReducer'
import * as types from './taskTypes'

describe('task reducer', () => {
  const initialState = { list: [] }

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle ADD_TASK', () => {
    const description = 'New task'
    const expectedState = {
      list: [{description: 'New task'}]
    }

    expect(reducer(undefined, {
      type: types.ADD_TASK,
      description
    })).toEqual(expectedState)
  })
})
