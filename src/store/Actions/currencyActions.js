import axios from "axios";
import {
  ADD_CURRENCY,
  BUY_CURRENCY,
  CLEAR_ERROR,
  CLEAR_RATE,
  CURRENCY_LOADED,
  CURRENCY_LOADING,
  CURRENCY_RATE,
  FROM_CURRENCY,
  SELL_CURRENCY,
  TO_CURRENCY,
  UNSUFFICENT_BALANCE,
} from "./actions";

export const getCurrencies = () => (dispatch, getState) => {
  dispatch({ type: CURRENCY_LOADING });
  axios
    .get("https://v6.exchangerate-api.com/v6/0f7ced3b83c72378b5294477/codes")
    .then((res) =>
      dispatch({
        type: CURRENCY_LOADED,
        payload: res.data.supported_codes,
      })
    );
};

export const getCurrencyRate = () => (dispatch, getState) => {
  const fromCurrency = getState().codes.fromCurrency;
  const toCurrency = getState().codes.toCurrency;

  axios
    .get(
      `https://v6.exchangerate-api.com/v6/0f7ced3b83c72378b5294477/latest/${fromCurrency}`
    )
    .then((res) =>
      dispatch({
        type: CURRENCY_RATE,
        payload: res.data.conversion_rates[toCurrency],
      })
    );
};

export const updateFromCurrency = (a) => (dispatch) => {
  dispatch({ type: FROM_CURRENCY, payload: a });
};

export const updateToCurrency = (a) => (dispatch) => {
  dispatch({ type: TO_CURRENCY, payload: a });
};

export const clearRate = (a) => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: CLEAR_RATE });
  }, 1);
};

export const sellCurrency = (input) => (dispatch, getState) => {
  const portfolio = getState().portfolioData;
  const fromCurrency = getState().codes.fromCurrency;
  const toCurrency = getState().codes.toCurrency;
  const rate = getState().codes.rates;
  const user = getState().auth.user.name;

  if (
    portfolio.filter((e) => e.acronym === fromCurrency)[0].totalAsset > input
  ) {
    const newPortfolio = portfolio.map((e) => {
      if (e.acronym === fromCurrency) {
        return { ...e, totalAsset: e.totalAsset - input };
      }
      if (e.acronym === toCurrency) {
        return { ...e, totalAsset: e.totalAsset + input * rate };
      }
      return e;
    });

    const localPortfolio = JSON.parse(localStorage.getItem(user));
    localStorage.setItem(
      user,
      JSON.stringify({
        ...localPortfolio,
        portfolio: newPortfolio,
      })
    );
    dispatch({ type: SELL_CURRENCY, payload: newPortfolio });
  } else {
    dispatch({
      type: UNSUFFICENT_BALANCE,
      payload: "You dont have enough balance",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR,
      });
    }, 3000);
  }
};

export const buyCurrency = (input) => (dispatch, getState) => {
  const portfolio = getState().portfolioData;
  const fromCurrency = getState().codes.fromCurrency;
  const toCurrency = getState().codes.toCurrency;
  const rate = getState().codes.rates;
  const user = getState().auth.user.name;

  if (
    portfolio.filter((e) => e.acronym === toCurrency)[0].totalAsset >
    rate * input
  ) {
    console.log("ok");
    const newPortfolio = portfolio.map((e) => {
      if (e.acronym === fromCurrency) {
        return { ...e, totalAsset: e.totalAsset + input };
      }
      if (e.acronym === toCurrency) {
        return { ...e, totalAsset: e.totalAsset - input * rate };
      }
      return e;
    });

    console.log(newPortfolio);
    const localPortfolio = JSON.parse(localStorage.getItem(user));
    localStorage.setItem(
      user,
      JSON.stringify({
        ...localPortfolio,
        portfolio: newPortfolio,
      })
    );
    dispatch({ type: BUY_CURRENCY, payload: newPortfolio });
  } else {
    dispatch({
      type: UNSUFFICENT_BALANCE,
      payload: "You dont have enough balance",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR,
      });
    }, 3000);
  }
};

export const buyCurrencyFromList = (input) => (dispatch, getState) => {
  const portfolio = getState().portfolioData;
  const toCurrency = getState().codes.toCurrency;
  const fromCurrency = getState().codes.fromCurrency;
  const user = getState().auth.user.name;
  const name = getState().codes.data.filter((e) => e[0] === toCurrency)[0][1];

  const rate = getState().codes.rates;

  const isInList = portfolio.find((e) => e.acronym === toCurrency);

  if (
    portfolio.filter((e) => e.acronym === fromCurrency)[0].totalAsset * rate >
    input
  ) {
    if (!isInList) {
      let newPortfolio = portfolio.map((e) => {
        if (e.acronym === fromCurrency) {
          return { ...e, totalAsset: e.totalAsset - input / rate };
        }

        return e;
      });

      newPortfolio = [
        ...newPortfolio,
        {
          acronym: toCurrency,
          name: name,
          totalAsset: input,
        },
      ];

      dispatch({ type: ADD_CURRENCY, payload: newPortfolio });
      const localPortfolio = JSON.parse(localStorage.getItem(user));
      localStorage.setItem(
        user,
        JSON.stringify({
          ...localPortfolio,
          portfolio: newPortfolio,
        })
      );
    } else {
      const newPortfolio = portfolio.map((e) => {
        if (e.acronym === toCurrency) {
          return { ...e, totalAsset: e.totalAsset + input };
        }
        if (e.acronym === fromCurrency) {
          return { ...e, totalAsset: e.totalAsset - input / rate };
        }
        return e;
      });
      dispatch({ type: ADD_CURRENCY, payload: newPortfolio });
      const localPortfolio = JSON.parse(localStorage.getItem(user));
      localStorage.setItem(
        user,
        JSON.stringify({
          ...localPortfolio,
          portfolio: newPortfolio,
        })
      );
    }
  } else {
    dispatch({
      type: UNSUFFICENT_BALANCE,
      payload: "You dont have enough balance",
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR,
      });
    }, 3000);
  }
};
