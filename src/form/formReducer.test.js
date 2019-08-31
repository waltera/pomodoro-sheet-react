import * as reducer from './formReducer'

describe('form reducer', () => {
  it('setValue with empty form', () => {
    const state = {}
    const name = 'other'
    const value = 'Test'
    const expected = {
      form: {
        other: {value: 'Test'}
      }
    }

    expect(reducer.setValue(state, {name, value})).toEqual(expected)
  })

  it('setValue with already initialized form', () => {
    const state = {
      form: {
        field1: {value: 'Field 1'}
      }
    }
    const name = 'other'
    const value = 'Test'
    const expected = {
      form: {
        field1: {value: 'Field 1'},
        other: {value: 'Test'}
      }
    }

    expect(reducer.setValue(state, {name, value})).toEqual(expected)
  })

  it('setValue with error', () => {
    const state = {
      form: {
        field1: {value: '', errors: ['error 1', 'error 2']}
      }
    }
    const name = 'field1'
    const value = 'Valid value'
    const expected = {
      form: {
        field1: {value: 'Valid value'}
      }
    }

    expect(reducer.setValue(state, {name, value})).toEqual(expected)
  })

  it('handleErrors', () => {

  })
})