import {delay} from 'redux-saga'
import {all, put, take, fork, cancel} from 'redux-saga/effects'
import * as timerTypes from './timerTypes'

export function* incrementAsync() {
  while (true) {
    yield put({type: timerTypes.INCREMENT_TIMER})
    yield delay(1000)
  }
}

export function* watchPomodoro() {
  while ( yield take(timerTypes.START_POMODORO) ) {
    const timer = yield fork(incrementAsync)
    yield take(timerTypes.STOP_TIMER)
    yield cancel(timer)
  }
}

export function* watchShortBreak() {
  while ( yield take(timerTypes.START_SHORT_BREAK) ) {
    const timer = yield fork(incrementAsync)
    yield take(timerTypes.STOP_TIMER)
    yield cancel(timer)
  }
}

export default function* timerSaga() {
  yield all([
    watchPomodoro(),
    watchShortBreak()
  ])
}
