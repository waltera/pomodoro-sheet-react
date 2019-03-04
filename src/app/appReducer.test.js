import reducer, {initialState} from './appReducer'
import {
  showAlert,
  hideAlert
} from './appActions'

describe('app reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SHOW_ALERT', () => {
    const expectedState = {
      alert: {
        show: true,
        level: 'error',
        message: 'Message'
      }
    }
    expect(reducer(undefined, showAlert('error', 'Message'))).toEqual(expectedState)
  })

  it('should handle HIDE_ALERT', () => {
    const state = {
      alert: {
        show: true,
        level: 'error',
        message: 'Message'
      }
    }
    const expectedState = {
      alert: {
        show: false,
        level: undefined,
        message: undefined
      }
    }
    expect(reducer(state, hideAlert())).toEqual(expectedState)
  })
})