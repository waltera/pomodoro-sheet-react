import { all } from 'redux-saga/effects'
import timerSaga from '../timer/timerSaga'
import taskSaga from '../task/taskSaga'

export default function* rootSaga() {
  yield all([
    timerSaga(),
    taskSaga()
  ])
}
