import {
  CURRENCY_LOADED,
  CURRENCY_LOADING,
  CURRENCY_RATE,
} from "../Actions/actions";

const initialState = {
  data: [],
  rates: [],
  date: "",
  loading: false,
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_LOADING:
      return {
        ...state,
        loading: true,
        date: new Date(Date.now()).toUTCString(),
      };
    case CURRENCY_LOADED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case CURRENCY_RATE:
      return {
        ...state,
        rates: action.payload,
        date: new Date(Date.now()).toUTCString(),
      };
    default:
      return state;
  }
};
