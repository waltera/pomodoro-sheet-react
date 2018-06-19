import * as types from './homeTypes'

export function startPomodoro() {
  return {
    type: types.TimerActions.START_POMODORO
  }
}

export function startShortBreack() {
  return {
    type: types.TimerActions.START_SHORT_BREACK
  }
}

export function startLongBreack() {
  return {
    type: types.TimerActions.START_LONG_BREACK
  }
}

export function stopTimer() {
  return {
    type: types.TimerActions.STOP_TIMER
  }
}

export function finishTimer() {
  return {
    type: types.TimerActions.FINISH_TIMER
  }
}

export function incrementTimer() {
  return {
    type: types.TimerActions.INCREMENT_TIMER
  }
}
