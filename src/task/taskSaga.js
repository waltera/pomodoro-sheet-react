import { SubmissionError } from 'redux-form'
import {
  all,
  takeEvery,
  call,
  put
} from 'redux-saga/effects'
import {
  EDIT,
  HANDLE_EDIT
} from './taskTypes'
import * as TaskApi from './taskApi'

export function* editSaga({id}) {
  const form = yield call(TaskApi.show, id)
  console.log('editSaga inicio')
  console.log(form)
  console.log('editSaga fim')
  yield put({type: HANDLE_EDIT, form})
}

export function* watchEdit() {
  yield takeEvery(EDIT, editSaga)
}

export default function* taskSaga() {
  yield all([
    watchEdit()
  ])
}