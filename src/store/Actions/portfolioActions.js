import { PORTFOLIO_START, USER_LOGOUT } from "./actions";

export const getPortfolio = (userName) => (dispatch, getState) => {
  //   dispatch({ type: CURRENCY_LOADING });
  const { portfolio } = JSON.parse(localStorage.getItem(userName));
  console.log(portfolio);
  dispatch({ type: PORTFOLIO_START, payload: portfolio });
};

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
