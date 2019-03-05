import { SubmissionError } from 'redux-form'
import {
  all,
  takeEvery,
  call
} from 'redux-saga/effects'
import {EDIT, HANDLE_NEW} from './taskTypes'
import * as TaskApi from './taskApi'

// export function* taskEditSaga(...args) {
//   console.log(args)
//   console.log('taskEditSaga UHULL')
// }

export function* handleNewSaga({...props}) {
  console.log('saga handleNew')
  console.log(props)
  // yield call(TaskApi.create, props.values)
}

export function* watchEdit() {
  // yield takeEvery(EDIT, taskEditSaga)
}

export function* watchNew() {
  yield takeEvery(HANDLE_NEW, handleNewSaga)
}

export default function* taskSaga() {
  yield all([
    // watchEdit(),
    watchNew()
  ])
}