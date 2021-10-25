import { PORTFOLIO_START, USER_LOGOUT } from "../Actions/actions";

const initialState = [];

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case PORTFOLIO_START:
      return action.payload;
    case USER_LOGOUT:
      return [];
    default:
      return state;
  }
};
