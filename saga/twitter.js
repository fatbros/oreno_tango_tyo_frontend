import axios from 'axios'
import Router from 'next/router'
import { take, call, put } from 'redux-saga/effects'

import { TWITTER } from '../constants/twitter'

import { setRequestToken, setAccessToken } from '../actions/twitter'

const getRequestTokenToAPI = async () => {
  try {
    const res = await axios.post('/api/v1/auth/twitter_request_tokenaa')
    return res.data
  } catch (err) {
    throw err
  }
}

export function* getRequestToken() {
  while (true) {
    try {
      yield take(TWITTER.GET_REQUEST_TOKEN)
      const requestToken = yield call(getRequestTokenToAPI)

      yield put(setRequestToken(requestToken))
      window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${requestToken}`
    } catch (err) {
      // 通信失敗
      console.warn(err)
    }
  }
}

const getAccessTokenToAPI = async params => {
  try {
    const res = await axios.post('/api/v1/auth/twitter_access_token', params)
    return res.data
  } catch (err) {
    throw err
  }
}

export function* getAccessToken() {
  while (true) {
    try {
      const takeAction = yield take(TWITTER.GET_ACCESS_TOKEN)
      const accessToken = yield call(getAccessTokenToAPI, takeAction.payload)
      yield put(setAccessToken(accessToken))
      Router.push('/')
    } catch (err) {
      // 通信失敗
      console.warn(err)
    }
  }
}
