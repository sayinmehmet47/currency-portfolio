import axios from 'axios';
import { USER_REGISTERED } from './actions';

export const register = (users) => (dispatch, getState) => {
  // User loading
  //   dispatch({ type: USER_LOADING });
  //   axios
  //     .get('/api/auth/user', tokenConfig(getState))
  //     .then((res) =>
  //       dispatch({
  //         type: USER_LOADED,
  //         payload: res.data,
  //       })
  //     )
  //     .catch((err) => {
  //       dispatch(returnErrors(err.response.data, err.response.status));
  //       dispatch({
  //         type: AUTH_ERROR,
  //       });
  //     });

  dispatch({ type: USER_REGISTERED, payload: users });
};
