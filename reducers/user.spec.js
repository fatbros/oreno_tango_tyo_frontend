import reducer from './user'
import * as actions from '../actions/user'

describe('user reducer', () => {
  it('初期stateが返却されるべき', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('emailがstateに挿入されるべき', () => {
    const email = 'aaa@gmail.com'
    const state = reducer(undefined, actions.setUserInfo({ email }))

    expect(state).toEqual({ email })
  })
})
