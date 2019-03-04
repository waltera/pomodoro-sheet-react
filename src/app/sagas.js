import { all } from 'redux-saga/effects'
import appSaga from './appSaga'
import timerSaga from '../timer/timerSaga'
import taskSaga from '../task/taskSaga'

export default function* rootSaga() {
  yield all([
    appSaga(),
    timerSaga(),
    taskSaga()
  ])
}
