import {delay} from 'redux-saga'
import {
  all,
  fork,
  take,
  put,
  call
} from 'redux-saga/effects'
import {
  SHOW_ALERT,
  HIDE_ALERT
} from './appTypes'

export function *alertSuccess() {
  yield call(delay, 2000)
  yield put({type: HIDE_ALERT})
}

export function* watchAlertSuccess() {
  while (yield take(SHOW_ALERT)) {
    yield fork(alertSuccess)
  }
}

export default function* appSaga() {
  yield all([
    watchAlertSuccess()
  ])
}