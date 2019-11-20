import * as React from 'react';
import {createUseStyles} from 'react-jss';

import { createUser } from '../../../store/user/actions';
import { User } from '../../../store/user/types';
import { useDispatch } from 'react-redux';

import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';

const useStyles = createUseStyles({
  form: {
    margin: 10,
  },
  input: {
    marginRight: 10,
  }
});

export const CreateUserForm: React.FunctionComponent = () => {
  const classes = useStyles();
  const [username, setUsername] = React.useState<string>('');
  const dispatch = useDispatch();

  const createNewUser = () => {
    const newUser: User = {
      username,
      avatar: `https://api.adorable.io/avatars/150/${username}.png`,
    }
    dispatch(createUser(newUser));
    setUsername('');
  };

  return (
    <div className={classes.form}>
      <Input
        className={classes.input}
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Button
        onClick={createNewUser}
        text="Create user"
        disabled={username.length === 0}
      />
    </div>
  );
};
