import React from 'react';

const User = ({ user }) => (
  <div style={{ margin: 10 }}>
    <div>Name: {user.firstName}</div>
    <div>Surname: {user.lastName}</div>
    <div>Email: {user.email}</div>
  </div>
);

export default User;
