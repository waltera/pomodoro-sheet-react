import { delay } from 'redux-saga'
import { all, put, take, fork, cancel, cancelled, takeEvery, select } from 'redux-saga/effects'
import {timerActions} from './homeTypes'

export function* incrementAsync() {
  while (true) {
    yield put({type: timerActions.INCREMENT_TIMER})
    yield delay(1000)
  }
}

export function* watchPomodoro() {
  while ( yield take(timerActions.START_POMODORO) ) {
    const timer = yield fork(incrementAsync)
    yield take(timerActions.STOP_TIMER)
    yield cancel(timer)
  }
}

export function* watchShortBreak() {
  while ( yield take(timerActions.START_SHORT_BREAK) ) {
    const timer = yield fork(incrementAsync)
    yield take(timerActions.STOP_TIMER)
    yield cancel(timer)
  }
}

export default function* homeSaga() {
  yield all([
    watchPomodoro(),
    watchShortBreak()
  ])
}
