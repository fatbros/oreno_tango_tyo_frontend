import React, { Component } from 'react'
import { connect } from 'react-redux'

import { sendAuthorizationCallbackUrl } from '../actions/google'

import CoreLayout from '../containers/CoreLayout'

import wrapLocationHref from '../functions/wrapLocationHref'

class Authorized extends Component {
  static async getInitialProps({ ctx }) {
    let callbackUrl = ''

    if (ctx.isServer) {
      callbackUrl = ctx.req.headers.referer
    } else {
      callbackUrl = wrapLocationHref()
    }

    return {
      callbackUrl
    }
  }

  componentDidMount() {
    const { dispatch, callbackUrl } = this.props
    dispatch(sendAuthorizationCallbackUrl(callbackUrl))
  }

  render() {
    return <CoreLayout>aaaaa</CoreLayout>
  }
}

export default connect()(Authorized)
