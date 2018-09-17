import React, { Component } from 'react'
import { connect } from 'react-redux'

import CoreLayout from '../containers/CoreLayout'
import Form from '../containers/Form'

class Login extends Component {
  render() {
    return (
      <CoreLayout>
        <Form />
      </CoreLayout>
    )
  }
}

export default connect()(Login)
