import { USERS_FETCH, USERS_FETCH_SUCCESS, USERS_FETCH_ERROR } from '../constants/user'

const fetchUsers = dispatch => {
  dispatch({ type: USERS_FETCH })
  return fetch('http://www.mocky.io/v2/5b3b93983300006100599d58')
    .then(response => response.json())
    .then(users => dispatch({ type: USERS_FETCH_SUCCESS, users }))
    .catch(error => dispatch({ type: USERS_FETCH_ERROR, error }))
}

export default fetchUsers
