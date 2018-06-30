import { createSelector } from 'reselect'

const userSelector = state => state.userReducer

export const userInfoSelector = createSelector(userSelector, user => user)
