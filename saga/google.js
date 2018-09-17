import Router from 'next/router'
import { take, call, put } from 'redux-saga/effects'

import { GOOGLE } from '../constants/google'
import * as api from './api'
import { setJwtToken } from './storage'

import { setUserInfo } from '../actions/user'

import wrapLocationHref from '../functions/wrapLocationHref'

export function* authorizationUrl() {
  while (true) {
    try {
      yield take(GOOGLE.GET_AUTHORIZATION_URL)
      const res = yield call(api.getAuthorizationUrl)
      wrapLocationHref(res['authorization_url'])
    } catch (err) {
      // 通信失敗
      console.warn(err, err.response)
    }
  }
}

export function* sendAuthorizationCallbackUrl() {
  while (true) {
    try {
      yield take(GOOGLE.SEND_AUTHORIZATION_CALLBACK_URL)
      const res = yield call(api.sendAuthorizationCallbackUrl)

      setJwtToken(res['jwt_token'])

      yield put(setUserInfo(res))
      Router.push('/signup')
    } catch (err) {
      // 通信失敗
      console.warn(err, err.response)
    }
  }
}
