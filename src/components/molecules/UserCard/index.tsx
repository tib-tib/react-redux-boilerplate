import * as React from 'react';
import { createUseStyles } from 'react-jss';

import { Avatar } from '../../atoms/Avatar';

export interface UserProps {
  username: string;
  avatar: string;
}

const useStyles = createUseStyles({
  userCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ffffff',
    border: 'solid 1px #b8b8b8',
    borderRadius: 10,
    padding: 20,
    width: 110,
    margin: 10,
  },
  username: {
    marginTop: 10,
    width: 100,
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

export const UserCard: React.FunctionComponent<UserProps> = props => {
  const { username, avatar } = props;
  const classes = useStyles();

  return (
    <div className={classes.userCard}>
      <Avatar url={avatar} />
      <div className={classes.username}>{username}</div>
    </div>
  );
};
