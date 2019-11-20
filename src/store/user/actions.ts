import { User, CREATE_USER, UserActionTypes } from './types';

export const createUser = (user: User): UserActionTypes => ({
  type: CREATE_USER,
  user,
});
