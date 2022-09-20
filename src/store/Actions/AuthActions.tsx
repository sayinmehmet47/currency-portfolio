import { Dispatch } from '@reduxjs/toolkit';
import { IUser } from '../../shared/interfaces';
import { RootState } from '../store';
import { LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTERED } from './actions';

export const register =
  (user: IUser) => (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({ type: USER_REGISTERED, payload: user });
  };
export const logout = () => (dispatch: Dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export const login = (user: IUser) => (dispatch: Dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};
