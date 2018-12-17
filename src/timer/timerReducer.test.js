import reducer from './timerReducer'
import * as timerActions from './timerActions'
import * as timerStates from './timerStates'

describe('timer reducer', () => {
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
        action: timerStates.POMODORO,
        minutes: '25',
        seconds: '00'
      }
    }
    const expectedState = {
      timer: {
        action: timerStates.POMODORO,
        minutes: '24',
        seconds: '59'
      }
    }
    const actions = {
      type: timerActions.INCREMENT_TIMER
    }
    expect(reducer(initialState, actions)).toEqual(expectedState)
  })

  it('should handle INCREMENT_TIMER with end', () => {
    const initialState = {
      timer: {
        action: timerStates.POMODORO,
        minutes: '00',
        seconds: '00'
      }
    }
    const actions = {
      type: timerActions.INCREMENT_TIMER
    }
    expect(reducer(initialState, actions)).toEqual(initialState)
  })

  it('should handle START_POMODORO', () => {
    const expectedState = {
      timer: {
        action: timerStates.POMODORO,
        minutes: '25',
        seconds: '00'
      }
    }
    const actions = {
      type: timerActions.START_POMODORO
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
      type: timerActions.STOP_TIMER
    }
    expect(reducer(undefined, actions)).toEqual(expectedState)
  })
})
