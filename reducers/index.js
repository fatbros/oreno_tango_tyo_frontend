import { combineReducers } from 'redux'

import googleReducer from './google'
import userReducer from './user'

export default combineReducers({
  googleReducer,
  userReducer
})
