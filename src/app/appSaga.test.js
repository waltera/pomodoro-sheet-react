import {delay} from 'redux-saga'
import {
  all,
  take,
  fork,
  put,
  call
} from 'redux-saga/effects'
import appSaga, {
  alertSuccess,
  watchAlertSuccess
} from './appSaga'
import {
  SHOW_ALERT,
  HIDE_ALERT
} from './appTypes'

describe('appSaga', () => {
  it('alertSuccess', () => {
    const gen = alertSuccess()

    expect(gen.next().value).toEqual(call(delay, 2000))
    expect(gen.next().value).toEqual(put({type: HIDE_ALERT}))
    expect(gen.next().done).toBe(true)
  })

  it('watchAlertSuccess', () => {
    const gen = watchAlertSuccess()

    expect(gen.next().value).toEqual(take(SHOW_ALERT))
    expect(gen.next(true).value).toEqual(fork(alertSuccess))
    expect(gen.next().value).toEqual(take(SHOW_ALERT))
    expect(gen.next().done).toBe(true)
  })

  it('appSaga', () => {
    const gen = appSaga()

    expect(gen.next().value).toEqual(all([watchAlertSuccess()]))
    expect(gen.next().done).toBe(true)
  })
})