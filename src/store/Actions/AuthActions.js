import { LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTERED } from "./actions";

export const register = (users) => (dispatch, getState) => {
  dispatch({ type: USER_REGISTERED, payload: users });
};
export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export const login = (user) => (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};
