import { take, call, put } from 'redux-saga/effects'

import { TWITTER } from '../constants/twitter'

import { setRequestToken } from '../actions/twitter'

import fetch from 'node-fetch'

const getRequestTokenToAPI = async () => {
  const res = await fetch('/api/v1/auth/twitter_request_token', {
    method: 'POST'
  })
  return res.json()
}

export function* getRequestToken() {
  while (true) {
    const takeAction = yield take(TWITTER.GET_REQUEST_TOKEN)
    const requestToken = yield call(getRequestTokenToAPI)

    const putAction = yield put(setRequestToken(requestToken))
    window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${requestToken}`
  }
}
