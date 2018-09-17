import { USER } from '../constants/user'

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USER.SET_USER_INFO:
      const { email } = action.payload
      return {
        ...state,
        email
      }
    default:
      return state
  }
}
