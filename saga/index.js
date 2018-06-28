import { fork } from 'redux-saga/effects'

import { authorizationUrl, sendAuthorizationCallbackUrl } from './google'
import { postSignup } from './user'

export default function* rootSaga() {
  yield fork(authorizationUrl)
  yield fork(sendAuthorizationCallbackUrl)
  yield fork(postSignup)
}
