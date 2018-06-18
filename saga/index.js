import { fork } from 'redux-saga/effects'

import { getRequestToken } from './twitter'

export default function* rootSaga() {
  yield fork(getRequestToken)
}
