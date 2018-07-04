import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as userActions from '../../../actions/user'

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    userActions.fetchUsers(dispatch)
  }

  render() {
    const { users, loading, error } = this.props
    return (
      <div>
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
        {error && <div>An error occured</div>}
        {users.length && <div>{users.length} users found</div>}
      </div>
    )
  }
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps)(Home)
