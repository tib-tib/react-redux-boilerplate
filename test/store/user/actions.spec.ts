import configureMockStore from 'redux-mock-store';
import { createUser } from '../../../src/store/user/actions';
import { User, CREATE_USER, UserActionTypes } from '../../../src/store/user/types';

const mockStore = configureMockStore();

describe('userActions', () => {
  describe('createUser', () => {
    it('should dispatch CREATE_USER when creating a new user', () => {
      const store = mockStore({});
      const user: User = { username: 'test-username', avatar: 'test-avatar' };
      const expectedActions = [{ type: CREATE_USER, user }];
      store.dispatch(createUser(user));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
