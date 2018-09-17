import { fork } from 'redux-saga/effects'

import { authorizationUrl, sendAuthorizationCallbackUrl } from './google'
import { putSignup } from './signup'
import { postLogin } from './login'

export default function* rootSaga() {
  yield fork(authorizationUrl)
  yield fork(sendAuthorizationCallbackUrl)
  yield fork(putSignup)
  yield fork(postLogin)
}
