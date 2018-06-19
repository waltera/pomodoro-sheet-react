import { all } from 'redux-saga/effects'
import homeSaga from '../home/homeSaga'

export default function* rootSaga() {
  yield all([
    homeSaga()
  ])
}
