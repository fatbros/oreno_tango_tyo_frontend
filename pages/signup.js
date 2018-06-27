import React, { Component } from 'react'
import { connect } from 'react-redux'

import CoreLayout from '../containers/CoreLayout'
import SignupContainer from '../containers/Signup'

import { userInfoSelector } from '../selectors/user'

class Signup extends Component {
  static async getInitialProps({ ctx, res }) {
    const state = ctx.store.getState()
    const userInfo = userInfoSelector(state)

    // TODO: 正常な文字が入っているのかバリテーション実装
    if (Object.keys(userInfo).length === 0) {
      // throw new Error('aaaaa')
      ctx.store.dispatch({
        type: 'SET_USER_INFO',
        payload: {email: 'aaa@gmail.com'}
      })
    }

    console.log(userInfo)

    return {
      userInfo
    }
  }

  render() {
    return (
      <CoreLayout>
        <SignupContainer />
      </CoreLayout>
    )
  }
}

export default connect()(Signup)
