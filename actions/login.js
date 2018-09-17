import { LOGIN } from '../constants/login'

export const postLogin = payload => {
  return {
    type: LOGIN.POST_LOGIN,
    payload
  }
}
