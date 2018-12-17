import * as actions from './timerActions'
import * as timerTypes from './timerTypes'

describe('timer actions', () => {
  it('should create startPomodoro action', () => {
    const expectedAction = {
      type: timerTypes.START_POMODORO
    }

    expect(actions.startPomodoro()).toEqual(expectedAction)
  })

  it('should create startShortBreack action', () => {
    const expectedAction = {
      type: timerTypes.START_SHORT_BREACK
    }

    expect(actions.startShortBreack()).toEqual(expectedAction)
  })

  it('should create startLongBreack action', () => {
    const expectedAction = {
      type: timerTypes.START_LONG_BREACK
    }

    expect(actions.startLongBreack()).toEqual(expectedAction)
  })

  it('sould create stopTimer action', () => {
    const expectedAction = {
      type: timerTypes.STOP_TIMER
    }

    expect(actions.stopTimer()).toEqual(expectedAction)
  })

  it('sould create finishTimer action', () => {
    const expectedAction = {
      type: timerTypes.FINISH_TIMER
    }

    expect(actions.finishTimer()).toEqual(expectedAction)
  })

  it('sould create incrementTimer action', () => {
    const expectedAction = {
      type: timerTypes.INCREMENT_TIMER
    }

    expect(actions.incrementTimer()).toEqual(expectedAction)
  })
})
