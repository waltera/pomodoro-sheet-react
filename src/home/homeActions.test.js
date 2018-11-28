import * as actions from './homeActions'
import {timerActions} from './homeTypes'

describe('home actions', () => {
  it('should create startPomodoro action', () => {
    const expectedAction = {
      type: timerActions.START_POMODORO
    }

    expect(actions.startPomodoro()).toEqual(expectedAction)
  })

  it('should create startShortBreack action', () => {
    const expectedAction = {
      type: timerActions.START_SHORT_BREACK
    }

    expect(actions.startShortBreack()).toEqual(expectedAction)
  })

  it('should create startLongBreack action', () => {
    const expectedAction = {
      type: timerActions.START_LONG_BREACK
    }

    expect(actions.startLongBreack()).toEqual(expectedAction)
  })

  it('sould create stopTimer action', () => {
    const expectedAction = {
      type: timerActions.STOP_TIMER
    }

    expect(actions.stopTimer()).toEqual(expectedAction)
  })

  it('sould create finishTimer action', () => {
    const expectedAction = {
      type: timerActions.FINISH_TIMER
    }

    expect(actions.finishTimer()).toEqual(expectedAction)
  })

  it('sould create incrementTimer action', () => {
    const expectedAction = {
      type: timerActions.INCREMENT_TIMER
    }

    expect(actions.incrementTimer()).toEqual(expectedAction)
  })
})
