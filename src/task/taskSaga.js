import { SubmissionError } from 'redux-form'
import {
  all,
  takeEvery
} from 'redux-saga/effects'

import {EDIT, HANDLE_NEW} from './taskTypes'

// export function* taskEditSaga(...args) {
//   console.log(args)
//   console.log('taskEditSaga UHULL')
// }

export function* handleNewSaga({...props}) {
  console.log('saga handleNew')
  console.log(props)
  sleep(1000).then(() => {
    throw new SubmissionError({
      description: 'User does not exist',
      _error: 'Login failed!'
    })
  })
  console.log('fim saga')
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