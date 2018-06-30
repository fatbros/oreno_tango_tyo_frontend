import { GOOGLE } from '../constants/google'

export const getAuthorizationUrl = () => {
  return {
    type: GOOGLE.GET_AUTHORIZATION_URL
  }
}

export const sendAuthorizationCallbackUrl = () => {
  return {
    type: GOOGLE.SEND_AUTHORIZATION_CALLBACK_URL
  }
}
