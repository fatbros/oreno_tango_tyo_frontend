import { USER } from '../constants/user'

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USER.SET_USER_INFO:
      const { objectid, email, id } = action.payload
      return {
        ...state,
        objectid,
        email,
        id
      }
    default:
      return state
  }
}
