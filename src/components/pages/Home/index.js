import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as userActions from '../../../actions/user'

import ErrorBoundary from '../../atoms/ErrorBoundary'

class Home extends Component {
  componentDidMount () {
    userActions.fetchUsers(this.props.dispatch)
  }

  render () {
    const { users, loading, error } = this.props
    return (
      <ErrorBoundary>
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
        {error && <div>An error occured</div>}
        {users.length && <div>{users.length} users found</div>}
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state, props) => {
  return state.user
}

export default connect(mapStateToProps)(Home)
