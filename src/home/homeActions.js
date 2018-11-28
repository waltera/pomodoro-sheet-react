import {timerActions} from './homeTypes'

export function startPomodoro() {
  return {
    type: timerActions.START_POMODORO
  }
}

export function startShortBreack() {
  return {
    type: timerActions.START_SHORT_BREACK
  }
}

export function startLongBreack() {
  return {
    type: timerActions.START_LONG_BREACK
  }
}

export function stopTimer() {
  return {
    type: timerActions.STOP_TIMER
  }
}

export function finishTimer() {
  return {
    type: timerActions.FINISH_TIMER
  }
}

export function incrementTimer() {
  return {
    type: timerActions.INCREMENT_TIMER
  }
}
