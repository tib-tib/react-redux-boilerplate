export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';

export interface User {
  username: string;
  avatar: string;
}

export interface UserState {
  users: User[];
}

interface CreateUserAction {
  type: typeof CREATE_USER;
  user: User;
}

export type UserActionTypes = CreateUserAction;
