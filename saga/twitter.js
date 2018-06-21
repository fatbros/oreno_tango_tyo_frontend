import Router from 'next/router'
import { take, call, put } from 'redux-saga/effects'

import { TWITTER } from '../constants/twitter'
import { setRequestToken, setAccessToken } from '../actions/twitter'
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

export function* getRequestToken() {
  while (true) {
    try {
      yield take(TWITTER.GET_REQUEST_TOKEN)
      const requestToken = yield call(api.getRequestTokenToAPI)

      yield put(setRequestToken(requestToken))
      wrapLocationHref(
        `https://api.twitter.com/oauth/authenticate?oauth_token=${requestToken}`
      )
    } catch (err) {
      // 通信失敗
      console.warn(err)
    }
  }
}

export function* getAccessToken() {
  while (true) {
    try {
      const takeAction = yield take(TWITTER.GET_ACCESS_TOKEN)
      const accessToken = yield call(
        api.getAccessTokenToAPI,
        takeAction.payload
      )
      yield put(setAccessToken(accessToken))
      Router.push('/')
    } catch (err) {
      // 通信失敗
      console.warn(err)
    }
  }
}
