import * as React from 'react';
import { User } from '../../../store/user/types';
import {createUseStyles} from 'react-jss';

import { UserCard } from '../../molecules/UserCard';

export interface UserProps {
  users: User[];
};

const useStyles = createUseStyles({
  users: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  noUsers: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 500,
    color: '#888888',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export const UserList: React.FunctionComponent<UserProps> = (props) => {
  const { users } = props;
  const classes = useStyles();

  return (
    <div className={classes.users}>
      {users.length === 0 && <div className={classes.noUsers}>No users</div>}
      {users.length > 0 && users.map((user: User) => (
        <UserCard key={user.username} username={user.username} avatar={user.avatar} />
      ))}
    </div>
  );
};
