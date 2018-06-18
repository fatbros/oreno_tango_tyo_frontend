import { TWITTER } from '../constants/twitter'

export default function twitter(state = {}, action) {
  switch (action.type) {
    case TWITTER.SET_REQUEST_TOKEN:
      return {
        ...state,
        requestToken: action.payload
      }
    case TWITTER.SET_OAUTH_TOKEN:
      const { oauth_token, oauth_verifier } = action.payload

      return {
        ...state,
        oauthToken: oauth_token,
        oauthVerifier: oauth_verifier
      }
    default:
      return state
  }
}
