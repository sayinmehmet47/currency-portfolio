import { CURRENCY_NEWS } from "../Actions/actions";

const initialState = {
  news: [],
};

export const currencyNews = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case CURRENCY_NEWS:
      return { ...state, news: action.payload };

    default:
      return state;
  }
};
