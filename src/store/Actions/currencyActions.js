import axios from "axios";
import {
  CURRENCY_LOADED,
  CURRENCY_LOADING,
  CURRENCY_RATE,
  LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTERED,
} from "./actions";

export const getCurrencies = (users) => (dispatch, getState) => {
  dispatch({ type: CURRENCY_LOADING });
  axios
    .get("https://v6.exchangerate-api.com/v6/61ae5c15d41f8f7ab2cdfdef/codes")
    .then((res) =>
      dispatch({
        type: CURRENCY_LOADED,
        payload: res.data.supported_codes,
      })
    );
};

export const getCurrencyRate = (selected, acronym) => (dispatch, getState) => {
  console.log(selected);
  axios
    .get(
      `https://v6.exchangerate-api.com/v6/61ae5c15d41f8f7ab2cdfdef/latest/${selected[0]}`
    )
    .then((res) =>
      dispatch({
        type: CURRENCY_RATE,
        payload: res.data.conversion_rates[acronym],
      })
    );
};
