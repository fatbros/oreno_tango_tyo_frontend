import { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import { getAuthorizationUrl } from '../actions/google'

class CoreLayout extends Component {
  render() {
    const { children, singupHandler } = this.props

    return (
      <div className="core-layout">
        <Fragment>
          <Header clickHandler={singupHandler} />
          <div>{children}</div>
        </Fragment>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  singupHandler: () => {
    dispatch(getAuthorizationUrl())
  }
})

export default connect(
  null,
  mapDispatchToProps
)(CoreLayout)
