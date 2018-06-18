import { TWITTER } from '../constants/twitter'

export const getRequestToken = popup => {
  return {
    type: TWITTER.GET_REQUEST_TOKEN,
    payload: popup
  }
}

export const setRequestToken = requestToken => {
  return {
    type: TWITTER.SET_REQUEST_TOKEN,
    payload: requestToken
  }
}

export const setOauthToken = query => {
  return {
    type: TWITTER.SET_OAUTH_TOKEN,
    payload: query
  }
}
