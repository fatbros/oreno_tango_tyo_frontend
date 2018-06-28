import { USER } from '../constants/user'

export const setUserInfo = payload => {
  return {
    type: USER.SET_USER_INFO,
    payload
  }
}

export const updateUserPassword = payload => {
  return {
    type: USER.UPDATE_USER_PASSWORD,
    payload
  }
}

export const deleteUserPassword = () => {
  return {
    type: USER.DELETE_USER_PASSWORD
  }
}

export const postSignup = () => {
  return {
    type: USER.POST_SIGNUP
  }
}
