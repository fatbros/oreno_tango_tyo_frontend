import React from 'react'
// import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../../styles/withRoot'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const Header = props => (
  <div className={props.classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          className={props.classes.flex}>
          Oreno Tango Tyo
        </Typography>
        {/* <Link href="login"> */}
        <Button
          className="button-login"
          color="inherit"
          className={props.classes.menuButton}
          onClick={props.clickHandler}>
          Signup
        </Button>
        {/* </Link> */}
      </Toolbar>
    </AppBar>
  </div>
)

export default withRoot(withStyles(styles)(Header))
