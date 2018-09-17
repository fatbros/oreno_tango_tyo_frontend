import { SIGNUP } from '../constants/signup'

export const postSignup = payload => {
  return {
    type: SIGNUP.POST_SIGNUP,
    payload
  }
}
