import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import { getAccessToken } from '../../actions/twitter'

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
    return (
      <Fragment>
        aaaaa
      </Fragment>
    )
  }
}

export default connect()(Authorized)
