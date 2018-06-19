import { delay } from 'redux-saga'
import { all, put, takeEvery } from 'redux-saga/effects'
import * as types from './homeTypes'

export function* incrementAsync() {
  while (true) {
    const data = yield put({ type: types.TimerActions.INCREMENT_TIMER })
    yield delay(1000)
  }
}

export function* watchStartPomodoro() {
  yield takeEvery(types.TimerActions.START_POMODORO, incrementAsync)
}

export default function* homeSaga() {
  yield all([
    watchIncrementAsync()
  ])
}
