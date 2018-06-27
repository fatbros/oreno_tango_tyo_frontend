// import { TWITTER } from '../constants/twitter'

export default function googleReducer(state = {}, action) {
  switch (action.type) {
    // case TWITTER.SET_REQUEST_TOKEN:
    //   return {
    //     ...state,
    //     requestToken: action.payload
    //   }
    // case TWITTER.SET_ACCESS_TOKEN:
    //   const { oauth_token, oauth_token_secret } = action.payload

    //   return {
    //     ...state,
    //     oauthToken: oauth_token,
    //     oauthTokenSecret: oauth_token_secret
    //   }
    default:
      return state
  }
}
