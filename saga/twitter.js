import { take, call, put } from 'redux-saga/effects'

import { TWITTER } from '../constants/twitter'

import { setRequestToken } from '../actions/twitter'

import axios from 'axios'

const getRequestTokenToAPI = async () => {
  const res = await axios.post('/api/v1/auth/twitter_request_token')
  return res.data
}

export function* getRequestToken() {
  while (true) {
    yield take(TWITTER.GET_REQUEST_TOKEN)
    const requestToken = yield call(getRequestTokenToAPI)

    yield put(setRequestToken(requestToken))
    window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${requestToken}`
  }
}

const getAccessTokenToAPI = async params => {
  const res = await axios.post('/api/v1/auth/twitter_access_token', params)
  return res.data
}

export function* getAccessToken() {
  while (true) {
    const takeAction = yield take(TWITTER.SET_OAUTH_TOKEN)
    const accessToken = yield call(getAccessTokenToAPI, takeAction.payload)
  }
}
