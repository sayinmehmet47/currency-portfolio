import { GET_TOTAL, PORTFOLIO_START, USER_LOGOUT } from "./actions";
import axios from "axios";

export const getPortfolio = (userName) => (dispatch, getState) => {
  const { portfolio } = JSON.parse(localStorage.getItem(userName));
  dispatch({ type: PORTFOLIO_START, payload: portfolio });
};

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export const getTotalAssets = () => (dispatch, getState) => {
  const user = getState().auth.user.name;
  const portfolio = getState().portfolioData;
  console.log(portfolio);

  axios
    .get(
      "https://v6.exchangerate-api.com/v6/61ae5c15d41f8f7ab2cdfdef/latest/USD"
    )
    .then((res) => {
      const rates = res.data.conversion_rates;
      console.log(rates);

      const total = portfolio
        .map((e) => e.totalAsset / rates[e.acronym])
        .reduce((a, b) => {
          return a + b;
        }, 0);

      dispatch({ type: GET_TOTAL, payload: Math.round(total) });
      const local = JSON.parse(localStorage.getItem(user));
      local.totalAsset = Math.round(total);
      localStorage.setItem(user, JSON.stringify(local));
    });
};
