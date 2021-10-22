import { USER_REGISTERED } from '../Actions/actions';

const initialState = {
  isRegistered: false,
  isLogin: false,
  user: { name: '', surname: '' },
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

    default:
      return state;
  }
};
