import React from 'react';
import User from '../../atoms/User';

const UserSection = ({ users }) => users.map(user => <User user={user} key={user.email} />);

export default UserSection;
