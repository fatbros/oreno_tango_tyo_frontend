import { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import { getAuthorizationUrl } from '../actions/google'

class CoreLayout extends Component {
  render() {
    const { children, loginBtnClick } = this.props

    return (
      <div className="core-layout">
        <Fragment>
          <Header loginBtnClick={loginBtnClick} />
          <div>{children}</div>
        </Fragment>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginBtnClick: () => {
    dispatch(getAuthorizationUrl())
  }
})

export default connect(
  null,
  mapDispatchToProps
)(CoreLayout)
