import userReducer from '../../src/reducers/user';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../../src/actions/user';

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {}))
      .toEqual({ error: null, loading: false, users: [] });
  });

  it('should handle FETCH_USERS_REQUEST', () => {
    expect(userReducer(undefined, { type: FETCH_USERS_REQUEST }))
      .toEqual({ error: null, loading: true, users: [] });
  });

  it('should handle FETCH_USERS_SUCCESS', () => {
    const users = [{ name: 'fake-name' }, { name: 'fake-name-2' }];
    expect(userReducer(undefined, { type: FETCH_USERS_SUCCESS, users }))
      .toEqual({ error: null, loading: false, users });
  });

  it('should handle FETCH_USERS_ERROR', () => {
    expect(userReducer(undefined, { type: FETCH_USERS_ERROR, error: 'FAKE-ERROR' }))
      .toEqual({ error: 'FAKE-ERROR', loading: false, users: [] });
  });
});
