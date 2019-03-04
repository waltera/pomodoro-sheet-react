import {
  SHOW_ALERT,
  HIDE_ALERT
} from './appTypes'

export const showAlert = (level, message) => ({type: SHOW_ALERT, level, message})
export const hideAlert = () => ({type: HIDE_ALERT})