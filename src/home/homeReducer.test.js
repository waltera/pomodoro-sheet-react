import reducer from './homeReducer'
import * as types from './homeTypes'

describe('home reducer', () => {
  it('should return initialState', () => {
    const expectedState = {
      timer: {
        action: undefined,
        minutes: '00',
        seconds: '00'
      }
    }
    expect(reducer(undefined, {})).toEqual(expectedState)
  })

  it('should handle INCREMENT_TIMER without end', () => {
    const initialState = {
      timer: {
        action: types.TimerActions.POMODORO,
        minutes: '25',
        seconds: '00'
      }
    }
    const expectedState = {
      timer: {
        action: types.TimerActions.POMODORO,
        minutes: '24',
        seconds: '59'
      }
    }
    const actions = {
      type: types.TimerActions.INCREMENT_TIMER
    }
    expect(reducer(initialState, actions)).toEqual(expectedState)
  })

  it('should handle INCREMENT_TIMER with end', () => {
    const initialState = {
      timer: {
        action: types.TimerActions.POMODORO,
        minutes: '00',
        seconds: '00'
      }
    }
    const actions = {
      type: types.TimerActions.INCREMENT_TIMER
    }
    expect(reducer(initialState, actions)).toEqual(initialState)
  })

  it('should handle START_POMODORO', () => {
    const initialState = {
      timer: {
        action: undefined,
        minutes: '00',
        seconds: '00'
      }
    }
    const expectedState = {
      timer: {
        action: types.TimerActions.POMODORO,
        minutes: '25',
        seconds: '00'
      }
    }
    const actions = {
      type: types.TimerActions.START_POMODORO
    }
    expect(reducer(undefined, actions)).toEqual(expectedState)
  })

  it('should handle STOP_TIMER', () => {
    const expectedState = {
      timer: {
        action: undefined,
        minutes: '00',
        seconds: '00'
      }
    }
    const actions = {
      type: types.TimerActions.STOP_TIMER
    }
    expect(reducer(undefined, actions)).toEqual(expectedState)
  })
})
