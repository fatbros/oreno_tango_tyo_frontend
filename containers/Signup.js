import { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { userInfoSelector } from '../selectors/user'

import withRoot from '../styles/withRoot'

import {
  updateUserPassword,
  deleteUserPassword,
  postSignup
} from '../actions/user'

const styles = theme => ({
  root: {
    paddingTop: '2em',
    flexGrow: 1
  },
  textField: {
    width: '50%'
  },
  signupButton: {
    marginTop: '1em'
  }
})

class Signup extends Component {
  render() {
    const {
      classes,
      updateUserPassword,
      deleteUserPassword,
      postSignup
    } = this.props

    return (
      <form className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container justify={'center'}>
              <TextField
                id="email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                margin="normal"
                defaultValue={this.props.userInfo.email}
                className={classes.textField}
                disabled
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify={'center'}>
              <TextField
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                className={classes.textField}
                onChange={e => {
                  updateUserPassword(e.target.value)
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify={'center'}>
              <Button
                className={classes.signupButton}
                variant="contained"
                color="primary"
                onClick={e => {
                  // deleteUserPassword()
                  postSignup()
                }}>
                登録する
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: userInfoSelector(state)
})

const mapDispatchToProps = dispatch => ({
  updateUserPassword: password => {
    dispatch(updateUserPassword(password))
  },
  deleteUserPassword: () => {
    dispatch(deleteUserPassword())
  },
  postSignup: () => {
    dispatch(postSignup())
  }
})

export default withRoot(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Signup)
  )
)