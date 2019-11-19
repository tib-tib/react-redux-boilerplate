export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

// enum Gender {
//     Male,
//     Female
// }

export interface User {
    // id: number;
    // firstName: string;
    // lastName: string;
    email: string;
    // gender: Gender;
}

export interface UserState {
    users: User[]
  }

interface CreateUserAction  {
    type: typeof CREATE_USER;
    user: User;
}

export type UserActionTypes = CreateUserAction;


