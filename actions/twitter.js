import { TWITTER } from '../constants/twitter'

export const getRequestToken = () => {
  return {
    type: TWITTER.GET_REQUEST_TOKEN
  }
}

export const setRequestToken = requestToken => {
  return {
    type: TWITTER.SET_REQUEST_TOKEN,
    payload: requestToken
  }
}

export const getAccessToken = oauthToken => {
  return {
    type: TWITTER.GET_ACCESS_TOKEN,
    payload: oauthToken
  }
}

export const setAccessToken = accessToken => {
  return {
    type: TWITTER.SET_ACCESS_TOKEN,
    payload: accessToken
  }
}
