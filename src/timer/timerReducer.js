import { createReducer } from '../app/utils'
import * as timerTypes from './timerTypes'
import * as timerStates from './timerStates'

const initialState = {
  timer: {
    action: undefined,
    minutes: '00',
    seconds: '00'
  }
}

const formatTime = (value) => (
  ('00' + value).slice(-2)
)

const nextMinute = ({ minutes, seconds }) => {
  if(minutes != '00' && seconds == '00') {
    return formatTime(parseInt(minutes) - 1)
  } else {
    return formatTime(minutes)
  }
}

const nextSecond = ({ minutes, seconds }) => {
  if(minutes == '00' && seconds == '00') return '00'

  if(seconds != '00') {
    return formatTime(parseInt(seconds) - 1)
  } else {
    return formatTime(59)
  }
}

const incrementTimer = (state) => {
  const newTimer = {
    action: state.timer.action,
    minutes: nextMinute(state.timer),
    seconds: nextSecond(state.timer)
  }

  return Object.assign({}, state, { timer: newTimer })
}

const startPomodoro = (state) => {
  const newTimer = {
    action: timerStates.POMODORO,
    minutes: formatTime(25),
    seconds: formatTime(0)
  }

  return Object.assign({}, state, { timer: newTimer })
}

const stopTimer = (state) => {
  const newTimer = {
    action: undefined,
    minutes: formatTime(0),
    seconds: formatTime(0)
  }

  return Object.assign({}, state, { timer: newTimer })
}

export default createReducer(initialState, {
  [timerTypes.START_POMODORO]: startPomodoro,
  [timerTypes.STOP_TIMER]: stopTimer,
  [timerTypes.INCREMENT_TIMER]: incrementTimer
})
