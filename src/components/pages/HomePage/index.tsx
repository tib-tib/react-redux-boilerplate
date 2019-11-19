import * as React from 'react';
import { AppState } from '../../../store';
import { createUser } from '../../../store/user/actions';
import { User } from '../../../store/user/types';
import { useSelector, useDispatch } from 'react-redux';

import { Avatar } from '../../atoms/Avatar';

export const HomePage: React.FunctionComponent = () => {
  const users = useSelector((store: AppState) => store.user.users);
  const [email, setEmail] = React.useState<string>('');
  const dispatch = useDispatch();

  const createNewUser = () => {
    dispatch(createUser({ email }));
    setEmail('');
  };

  return (
    <div>
      <div>
        <input value={email} onChange={e => setEmail(e.target.value)}/>
        <button onClick={createNewUser}>Create user</button>
      </div>
      <div>
        {users.length > 0 && users.map((user: User) => (
          <Avatar email={user.email} />
        ))}
      </div>
    </div>
  );
};
