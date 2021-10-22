import {
  LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTERED,
} from '../Actions/actions';

const initialState = {
  isRegistered: false,
  isLogin: false,
  user: { name: '', surname: '' },
  balance: 1000,
};

export const authReducer = (state = initialState, action) => {
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
        isLogin: '',
        isRegistered: '',
        user: { name: '', surname: '' },
        balance: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isRegistered: true,
        user: { name: action.payload.name, surname: action.payload.surname },
        balance: action.payload.balance,
      };

    default:
      return state;
  }
};
