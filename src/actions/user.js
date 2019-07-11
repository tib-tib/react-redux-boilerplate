const axios = require('axios');

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, users });
const fetchUsersError = error => ({ type: FETCH_USERS_ERROR, error });

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  return axios
    .get('http://www.mocky.io/v2/5b3b93983300006100599d58')
    .then(({ data }) => {
      dispatch(fetchUsersSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchUsersError(error.response.data));
    });
};
