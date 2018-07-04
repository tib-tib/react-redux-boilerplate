import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/user'

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: null
}

const setLoading = state => ({ ...state, loading: true })

const setUsers = (state, users) => ({ ...state, users, error: null, loading: false })

const setError = (state, error) => ({ ...state, error, loading: false })

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return setLoading(state)
    case FETCH_USERS_SUCCESS:
      return setUsers(state, action.users)
    case FETCH_USERS_ERROR:
      return setError(state, action.error)
    default:
      return state
  }
}
