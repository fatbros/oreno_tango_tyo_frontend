import { fork } from 'redux-saga/effects'

import { getRequestToken, getAccessToken } from './twitter'

export default function* rootSaga() {
  yield fork(getRequestToken)
  yield fork(getAccessToken)
}
