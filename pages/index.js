import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import { getRequestToken } from '../actions/twitter'

class Index extends Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)
  }

  click() {
    const { dispatch } = this.props
    dispatch(getRequestToken())
  }

  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" />
            <Typography variant="title" color="inherit">
              Oreno Tango Tyo
            </Typography>
            <Button onClick={this.click} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Fragment>
    )
  }
}

export default connect()(Index)
