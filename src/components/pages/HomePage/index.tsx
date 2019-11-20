import * as React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { AppState } from '../../../store';
import { User } from '../../../store/user/types';

import { CreateUserForm } from '../../molecules/CreateUserForm';
import { UserList } from '../../organisms/UserList';

const useStyles = createUseStyles({
  home: {
    background: '#ededed',
    minHeight: 'calc(100% - 100px)',
    width: 'calc(100% - 100px)',
    padding: 50,
  },
});

export const HomePage: React.FunctionComponent = () => {
  const classes = useStyles();
  const users: User[] = useSelector((store: AppState) => store.user.users);
  return (
    <div className={classes.home}>
      <CreateUserForm />
      <UserList users={users} />
    </div>
  );
};
