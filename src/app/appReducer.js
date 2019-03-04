import {createReducer} from './utils'
import {
  SHOW_ALERT,
  HIDE_ALERT
} from './appTypes'

export const initialState = {
  alert: {
    show: false,
    level: undefined,
    message: undefined
  }
}

export const showAlert = (state, {level, message}) => {
  const alert = {
    show: true,
    level: level,
    message: message
  }
  return Object.assign({}, state, {alert: alert})
}

export const hideAlert = (state) => {
  const alert = {
    show: false,
    level: undefined,
    message: undefined
  }
  return Object.assign({}, state, {alert: alert})
}

export default createReducer(initialState, {
  [SHOW_ALERT]: showAlert,
  [HIDE_ALERT]: hideAlert
})