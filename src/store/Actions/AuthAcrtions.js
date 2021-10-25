import axios from "axios";
import { LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTERED } from "./actions";

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
export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export const login = (user) => (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};
