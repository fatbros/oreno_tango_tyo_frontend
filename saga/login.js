import Router from 'next/router'
import { take, call, put } from 'redux-saga/effects'

import { LOGIN } from '../constants/login'
import * as api from './api'

import { setJwtToken } from './storage'

import { setUserInfo } from '../actions/user'

export function* postLogin() {
  while (true) {
    try {
      const { payload } = yield take(LOGIN.POST_LOGIN)

      const res = yield call(api.postLogin, payload)
      setJwtToken(res['jwt_token'])

      yield put(setUserInfo(res))
      Router.push('/')
    } catch (err) {
      // 通信失敗
      console.warn(err, err.response)
    }
  }
}
