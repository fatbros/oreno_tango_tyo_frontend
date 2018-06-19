import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAccessToken } from '../../actions/twitter'

import CoreLayout from '../../containers/CoreLayout'

class Authorized extends Component {
  static async getInitialProps({ ctx }) {
    const query = ctx.query

    return {
      query: {
        oauth_token: encodeURIComponent(query.oauth_token),
        oauth_verifier: encodeURIComponent(query.oauth_verifier)
      }
    }
  }

  componentDidMount() {
    const { query, dispatch } = this.props
    dispatch(getAccessToken(query))
  }

  render() {
    return <CoreLayout>aaaaa</CoreLayout>
  }
}

export default connect()(Authorized)
