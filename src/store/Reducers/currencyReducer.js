import { CURRENCY_LOADED, CURRENCY_LOADING } from '../Actions/actions';

const initialState = {
  data: [],
  loading: false,
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CURRENCY_LOADED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
