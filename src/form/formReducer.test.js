import * as reducer from './formReducer'

describe('form reducer', () => {
  it('setValue', () => {
    const state = {form: {field1: 'Field 1'} }
    const name = 'other'
    const value = 'Test'
    const expected = {form: {field1: 'Field 1', other: 'Test'}}

    expect(reducer.setValue(state, {name, value})).toEqual(expected)
  })
})