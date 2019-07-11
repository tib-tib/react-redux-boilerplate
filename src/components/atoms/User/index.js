import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  userContainer: {
    margin: 10,
  },
};

const User = ({ classes, user }) => (
  <div className={classes.userContainer}>
    <div>Name: {user.firstName}</div>
    <div>Surname: {user.lastName}</div>
    <div>Email: {user.email}</div>
  </div>
);

export default injectSheet(styles)(User);
