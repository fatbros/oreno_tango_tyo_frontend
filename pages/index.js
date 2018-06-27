import React, { Component } from 'react'
import { connect } from 'react-redux'

import CoreLayout from '../containers/CoreLayout'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../styles/withRoot'

class Index extends Component {
  render() {
    return <CoreLayout>aaaa</CoreLayout>
  }
}

export default withRoot(withStyles()(connect()(Index)))
