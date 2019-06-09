// import { SubmissionError } from 'redux-form'
import {
  all,
  takeEvery,
  call,
  select
} from 'redux-saga/effects'
import {
  EDIT,
  HANDLE_CREATE
} from './taskTypes'
import * as TaskApi from './taskApi'

export const getForm = (state) => state.task.form

export function* createSaga() {
  console.log('createSaga')
  console.log(yield select(getForm))
}

export function* editSaga({id}) {
  const form = yield call(TaskApi.show, id)
  console.log('editSaga inicio')
  console.log(form)
  console.log('editSaga fim')
  // yield put({type: HANDLE_EDIT, form})
}

export function* watchCreate() {
  yield takeEvery(HANDLE_CREATE, createSaga)
}

export function* watchEdit() {
  yield takeEvery(EDIT, editSaga)
}

export default function* taskSaga() {
  yield all([
    watchEdit(),
    watchCreate()
  ])
}