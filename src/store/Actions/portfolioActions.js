import { GET_TOTAL, PORTFOLIO_START, USER_LOGOUT } from "./actions";
import axios from "axios";

export const getPortfolio = () => (dispatch, getState) => {
  const userName = getState().auth.user.name;
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
      "https://v6.exchangerate-api.com/v6/0f7ced3b83c72378b5294477/latest/USD"
    )
    .then((res) => {
      const rates = res.data.conversion_rates;
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
