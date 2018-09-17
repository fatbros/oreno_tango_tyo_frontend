import Router from 'next/router'

import { take, call } from 'redux-saga/effects'

import { SIGNUP } from '../constants/signup'
import * as api from './api'

export function* putSignup() {
  while (true) {
    try {
      const { payload } = yield take(SIGNUP.POST_SIGNUP)

      yield call(api.putSignup, payload)
      Router.push('/')
    } catch (err) {
      // 通信失敗
      console.warn(err, err.response)
    }
  }
}
