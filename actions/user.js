import { USER } from '../constants/user'

export const setUserInfo = payload => {
  return {
    type: USER.SET_USER_INFO,
    payload
  }
}
