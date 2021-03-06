import { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { userInfoSelector } from '../selectors/user'

import withRoot from '../styles/withRoot'

import { putSignup } from '../actions/signup'

const styles = theme => ({
  root: {
    paddingTop: '2em',
    flexGrow: 1
  },
  textField: {
    width: '50%'
  },
  submitButton: {
    marginTop: '1em'
  }
})

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: ''
    }
  }
  render() {
    const { classes, putSignup } = this.props

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
                  this.setState({
                    password: e.target.value
                  })
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify={'center'}>
              <Button
                className={classes.submitButton}
                variant="contained"
                color="primary"
                onClick={e => {
                  putSignup(this.state.password)
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
  putSignup: password => {
    dispatch(putSignup(password))
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
