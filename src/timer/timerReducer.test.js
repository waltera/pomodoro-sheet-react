import reducer from './timerReducer'
import {START_POMODORO, STOP_TIMER, INCREMENT_TIMER} from './timerTypes'
import {POMODORO} from './timerStates'

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
        action: POMODORO,
        minutes: '25',
        seconds: '00'
      }
    }
    const expectedState = {
      timer: {
        action: POMODORO,
        minutes: '24',
        seconds: '59'
      }
    }
    const actions = {
      type: INCREMENT_TIMER
    }
    expect(reducer(initialState, actions)).toEqual(expectedState)
  })

  it('should handle INCREMENT_TIMER with end', () => {
    const initialState = {
      timer: {
        action: POMODORO,
        minutes: '00',
        seconds: '01'
      }
    }
    const expectedState = {
      timer: {
        action: POMODORO,
        minutes: '00',
        seconds: '00'
      }
    }
    const actions = {
      type: INCREMENT_TIMER
    }
    expect(reducer(initialState, actions)).toEqual(expectedState)
  })

  it('should handle START_POMODORO', () => {
    const expectedState = {
      timer: {
        action: POMODORO,
        minutes: '25',
        seconds: '00'
      }
    }
    const actions = {
      type: START_POMODORO
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
      type: STOP_TIMER
    }
    expect(reducer(undefined, actions)).toEqual(expectedState)
  })
})
