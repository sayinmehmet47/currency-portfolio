import { CURRENCY_NEWS } from "../Actions/actions";

const initialState = {
  news: [],
};

export const newsDaily = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_NEWS:
      return { ...state, news: action.payload };

    default:
      return state;
  }
};
