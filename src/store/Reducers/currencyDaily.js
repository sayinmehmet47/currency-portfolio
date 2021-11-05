import { CURRENCY_DAILY_START } from "../Actions/actions";

const initialState = {
  fromTRY: "",
};

export const currencyDailyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_DAILY_START:
      return action.payload;

    default:
      return state;
  }
};
