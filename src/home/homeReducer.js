import { combineReducers } from 'redux'
import { createReducer } from '../app/utils'
import * as types from './homeTypes';

// seconds
const pomodoroSize = 1500*1000

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
    let prev = parseInt(minutes) - 1
    return formatTime(prev)
  } else {
    return formatTime(minutes)
  }
}

const nextSecond = ({ minutes, seconds }) => {
  if(minutes == '00' && seconds == '00') return '00'

  if(minutes != '00' && seconds != '00') {
    let prev = parseInt(seconds) - 1
    return formatTime(prev)
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
    action: types.TimerActions.POMODORO,
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
  [types.TimerActions.START_POMODORO]: startPomodoro,
  [types.TimerActions.STOP_TIMER]: stopTimer,
  [types.TimerActions.INCREMENT_TIMER]: incrementTimer
})
