import {delay} from 'redux-saga'
import {getMinutes, getSeconds} from './timerSelector'
import {
  all,
  put,
  take,
  cancel,
  fork,
  call,
  select
} from 'redux-saga/effects'
import {
  INCREMENT_TIMER,
  START_POMODORO,
  START_SHORT_BREAK,
  STOP_TIMER
} from './timerTypes'

export function* incrementAsyncLoop() {
  const minutes = yield select(getMinutes)
  const seconds = yield select(getSeconds)

  return !(minutes == '00' && seconds == '00')
}

export function* incrementAsync() {
  while (yield call(incrementAsyncLoop)) {
    yield put({type: INCREMENT_TIMER})
    yield call(delay, 1000)
  }
}

export function* watchPomodoro() {
  while ( yield take(START_POMODORO) ) {
    const timer = yield fork(incrementAsync)
    yield take(STOP_TIMER)
    yield cancel(timer)
  }
}

export function* watchShortBreak() {
  while ( yield take(START_SHORT_BREAK) ) {
    const timer = yield fork(incrementAsync)
    yield take(STOP_TIMER)
    yield cancel(timer)
  }
}

export default function* timerSaga() {
  yield all([
    watchPomodoro(),
    watchShortBreak()
  ])
}
