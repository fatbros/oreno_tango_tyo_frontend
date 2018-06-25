// import Router from 'next/router'
import { take, call, put } from 'redux-saga/effects'

import { GOOGLE } from '../constants/google'
import * as api from './api'

const wrapLocationHref = url => {
  if (process.env.NODE_ENV === 'test') {
    jsdom.reconfigure({
      url
    })
  } else {
    window.location.href = url
  }
}

export function* authorizationUrl() {
  while (true) {
    try {
      yield take(GOOGLE.GET_AUTHORIZATION_URL)
      const res = yield call(api.getAuthorizationUrl)
      wrapLocationHref(res['authorization_url'])
    } catch (err) {
      // 通信失敗
      console.warn(err)
    }
  }
}
