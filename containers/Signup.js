import { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

import { userInfoSelector } from '../selectors/user'

class Signup extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <form>
          <Grid item xs={12}>
            <TextField
              id="email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              margin="normal"
              defaultValue={this.props.userInfo.email}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </Grid>
        </form>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: userInfoSelector(state)
})

export default withStyles()(connect(mapStateToProps)(Signup))
