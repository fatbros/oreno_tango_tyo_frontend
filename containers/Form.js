import { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import withRoot from '../styles/withRoot'

import { postLogin } from '../actions/login'

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

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    const { classes, postLogin } = this.props

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
                className={classes.textField}
                onChange={e => {
                  this.setState({
                    email: e.target.value
                  })
                }}
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
                  postLogin(this.state.password, this.state.email)
                }}>
                ログインする
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postLogin: (password, email) => {
    dispatch(postLogin({ password, email }))
  }
})

export default withRoot(
  withStyles(styles)(
    connect(
      null,
      mapDispatchToProps
    )(Login)
  )
)
