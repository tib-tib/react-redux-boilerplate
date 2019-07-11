import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../../actions/user';
import UserSection from '../../organisms/UserSection';

export class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.fetchUsers());
  }

  render() {
    const { users, loading, error } = this.props;
    return (
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>An error occured: {error}</div>}
        {users.length > 0 && <UserSection users={users} />}
      </div>
    );
  }
}

export const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(Home);
