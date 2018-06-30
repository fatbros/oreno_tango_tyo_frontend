import { Component } from 'react'
import { connect } from 'react-redux'

import { sendAuthorizationCallbackUrl } from '../actions/google'

class Authorized extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(sendAuthorizationCallbackUrl())
  }

  render() {
    return ''
  }
}

export default connect()(Authorized)
