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
    case USER.UPDATE_USER_PASSWORD:
      const password = action.payload
      return {
        ...state,
        password
      }
    case USER.DELETE_USER_PASSWORD:
      let tmp = { ...state }
      delete tmp.password
      return tmp
    default:
      return state
  }
}
