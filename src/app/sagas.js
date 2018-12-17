import { all } from 'redux-saga/effects'
import timerSaga from '../timer/timerSaga'

export default function* rootSaga() {
  yield all([
    timerSaga()
  ])
}
