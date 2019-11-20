import {
  UserState,
  UserActionTypes,
  CREATE_USER,
} from './types';

const initialState: UserState = {
  users: [],
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case CREATE_USER:
      return action.user ? {
        users: [...state.users, action.user],
      } : state;
    default:
      return state;
  }
}

export default userReducer;
