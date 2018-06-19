import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

const Header = props => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" />
      <Typography variant="title" color="inherit">
        Oreno Tango Tyo
      </Typography>
      <Button
        className="button-login"
        onClick={props.loginBtnClick}
        color="inherit">
        Login
      </Button>
    </Toolbar>
  </AppBar>
)

export default Header
