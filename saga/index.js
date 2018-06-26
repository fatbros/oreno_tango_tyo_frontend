import { fork } from 'redux-saga/effects'

import { authorizationUrl, sendAuthorizationCallbackUrl } from './google'

export default function* rootSaga() {
  yield fork(authorizationUrl)
  yield fork(sendAuthorizationCallbackUrl)
}
