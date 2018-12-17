import * as timerTypes from './timerTypes'

export function startPomodoro() {
  return {
    type: timerTypes.START_POMODORO
  }
}

export function startShortBreack() {
  return {
    type: timerTypes.START_SHORT_BREACK
  }
}

export function startLongBreack() {
  return {
    type: timerTypes.START_LONG_BREACK
  }
}

export function stopTimer() {
  return {
    type: timerTypes.STOP_TIMER
  }
}

export function finishTimer() {
  return {
    type: timerTypes.FINISH_TIMER
  }
}

export function incrementTimer() {
  return {
    type: timerTypes.INCREMENT_TIMER
  }
}
