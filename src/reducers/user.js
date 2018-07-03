import {
  USERS_FETCH,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_ERROR
} from '../constants/user'

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: null
}

const setLoading = (state) => ({ ...state, loading: true })

const setUsers = (state, users) => ({ ...state, users, loading: false })

const setError = (state, error) => ({ ...state, error, loading: false })

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USERS_FETCH:
      return setLoading(state)
    case USERS_FETCH_SUCCESS:
      return setUsers(state, action.users)
    case USERS_FETCH_ERROR:
      return setError(state, action.error)
    default:
      return state
  }
}
