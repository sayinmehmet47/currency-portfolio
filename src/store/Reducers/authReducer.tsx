import { PayloadAction } from '@reduxjs/toolkit';
import { IAuth } from '../../shared/interfaces';
import {
  LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTERED,
} from '../Actions/actions';

const initialState: IAuth = {
  isRegistered: false,
  isLogin: false,
  user: { name: '', surname: '' },
};

export const authReducer = (
  state = initialState,
  action: PayloadAction<{ name: string; surname: string }>
) => {
  switch (action.type) {
    case USER_REGISTERED:
      return {
        ...state,
        isLogin: true,
        isRegistered: true,
        user: { name: action.payload.name, surname: action.payload.surname },
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
        isRegistered: false,
        user: { name: '', surname: '' },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isRegistered: true,
        user: { name: action.payload.name, surname: action.payload.surname },
      };

    default:
      return state;
  }
};
