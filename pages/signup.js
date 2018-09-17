import React, { Component } from 'react'
import { connect } from 'react-redux'

import CoreLayout from '../containers/CoreLayout'
import EmailDisabledForm from '../containers/EmailDisabledForm'

import { userInfoSelector } from '../selectors/user'

class Signup extends Component {
  static async getInitialProps({ ctx, res }) {
    const state = ctx.store.getState()
    const userInfo = userInfoSelector(state)

    return {
      userInfo
    }
  }

  render() {
    return (
      <CoreLayout>
        <EmailDisabledForm />
      </CoreLayout>
    )
  }
}

export default connect()(Signup)
