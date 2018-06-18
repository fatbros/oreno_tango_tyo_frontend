import { TWITTER } from '../constants/twitter'

export default function twitter(state = {}, action) {
  switch (action.type) {
    case TWITTER.SET_REQUEST_TOKEN:
      return {
        ...state,
        requestToken: action.payload
      }
    default:
      return state
  }
}
