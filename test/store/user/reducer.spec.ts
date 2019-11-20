import userReducer from '../../../src/store/user/reducer';
import { User, CREATE_USER } from '../../../src/store/user/types';

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, { type: CREATE_USER, user: undefined })).toEqual({ users: [] });
  });

  it('should handle CREATE_USER', () => {
    const user: User = { username: 'test-username', avatar: 'test-avatar' };
    expect(userReducer(undefined, { type: CREATE_USER, user })).toEqual({ users: [user] });
  });
});
