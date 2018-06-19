import React, { Component } from 'react'
import { connect } from 'react-redux'

import CoreLayout from '../containers/CoreLayout'

class Index extends Component {
  render() {
    return <CoreLayout>aaaa</CoreLayout>
  }
}

export default connect()(Index)
