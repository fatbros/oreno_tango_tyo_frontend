import { fork } from 'redux-saga/effects'

import { authorizationUrl } from './google'

export default function* rootSaga() {
  yield fork(authorizationUrl)
}
