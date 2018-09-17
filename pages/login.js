import React, { Component } from 'react'
import { connect } from 'react-redux'

import CoreLayout from '../containers/CoreLayout'
import EmailDisabledForm from '../containers/EmailDisabledForm'

class Login extends Component {
  render() {
    return (
      <CoreLayout>
        <EmailDisabledForm />
      </CoreLayout>
    )
  }
}

export default connect()(Login)
