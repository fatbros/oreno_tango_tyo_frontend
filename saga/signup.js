import Router from 'next/router'

import { take, call, select } from 'redux-saga/effects'

import { SIGNUP } from '../constants/signup'
import * as api from './api'

import { userInfoSelector } from '../selectors/user'

export function* postSignup() {
  while (true) {
    try {
      yield take(SIGNUP.POST_SIGNUP)
      const userInfo = yield select(userInfoSelector)

      yield call(api.postSignup, userInfo)
      Router.push('/')
    } catch (err) {
      // 通信失敗
      console.warn(err, err.response)
    }
  }
}
