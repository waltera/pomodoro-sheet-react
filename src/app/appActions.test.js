import {
  showAlert,
  hideAlert
} from './appActions'
import {
  SHOW_ALERT,
  HIDE_ALERT
} from './appTypes'

describe('app actions', () => {
  it('showAlert', () => {
    const level = 'error'
    const message = 'message'
    const expected = {
      type: SHOW_ALERT,
      level,
      message
    }
    expect(showAlert(level, message)).toEqual(expected)
  })

  it('hideAlert', () => {
    expect(hideAlert()).toEqual({type: HIDE_ALERT})
  })
})