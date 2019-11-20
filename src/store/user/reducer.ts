import {
  UserState,
  UserActionTypes,
  CREATE_USER,
} from './types';

const initialState: UserState = {
  users: [],
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case CREATE_USER:
      return {
        users: [...state.users, action.user],
      }
    default:
      return state;
  }
}
