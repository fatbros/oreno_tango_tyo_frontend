import { GOOGLE } from '../constants/google'

export const getAuthorizationUrl = () => {
  return {
    type: GOOGLE.GET_AUTHORIZATION_URL
  }
}
