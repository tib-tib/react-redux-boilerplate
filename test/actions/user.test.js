import thunkMiddleware from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import moxios from 'moxios'

import {
  fetchUsers,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from '../../src/actions/user'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('userActions', () => {
  describe('fetchUsers', () => {
    beforeEach(() => {
      moxios.install()
    })

    afterEach(() => {
      moxios.uninstall()
    })

    it('should dispatch FETCH_USERS_SUCCESS if users were fetched successfully', async () => {
      const users = [{ name: 'fake-user-name'}, { name: 'fake-user-name-2'}]
      const store = mockStore({})
      moxios.stubRequest('http://www.mocky.io/v2/5b3b93983300006100599d58', { status: 200, response: users })
      const expectedActions = [
        { type: FETCH_USERS_REQUEST },
        { type: FETCH_USERS_SUCCESS, users }
      ]
      await store.dispatch(fetchUsers())
      expect(store.getActions()).toEqual(expectedActions)
    })

    it('should dispatch FETCH_USERS_ERROR if an error occured while fetching users', async () => {
      const store = mockStore({})
      moxios.stubRequest('http://www.mocky.io/v2/5b3b93983300006100599d58', { status: 500, response: 'FAKE-ERROR' })
      const expectedActions = [
        { type: FETCH_USERS_REQUEST },
        { type: FETCH_USERS_ERROR, error: 'FAKE-ERROR' }
      ]
      await store.dispatch(fetchUsers())
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
