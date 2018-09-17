import { SIGNUP } from '../constants/signup'

export const putSignup = payload => {
  return {
    type: SIGNUP.POST_SIGNUP,
    payload
  }
}
