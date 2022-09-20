import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

import {
  ADD_CURRENCY,
  BUY_CURRENCY,
  CLEAR_ERROR,
  CLEAR_RATE,
  CURRENCY_DAILY_START,
  CURRENCY_LOADED,
  CURRENCY_LOADING,
  CURRENCY_NEWS,
  CURRENCY_RATE,
  FROM_CURRENCY,
  SELL_CURRENCY,
  TO_CURRENCY,
  UNSUFFICENT_BALANCE,
} from './actions';
export const getCurrencies = () => (dispatch: Dispatch) => {
  const key = process.env.REACT_APP_ACTIVATION_KEY;

  require('dotenv').config();
  dispatch({ type: CURRENCY_LOADING });
  axios.get(`https://v6.exchangerate-api.com/v6/${key}/codes`).then((res) =>
    dispatch({
      type: CURRENCY_LOADED,
      payload: res.data.supported_codes,
    })
  );
};

export const getCurrencyRate =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const key = process.env.REACT_APP_ACTIVATION_KEY;

    const fromCurrency = getState().codes.fromCurrency;
    const toCurrency = getState().codes.toCurrency;
    require('dotenv').config();

    axios
      .get(`https://v6.exchangerate-api.com/v6/${key}/latest/${fromCurrency}`)
      .then((res) =>
        dispatch({
          type: CURRENCY_RATE,
          payload: res.data.conversion_rates[toCurrency],
        })
      );
  };

export const updateFromCurrency = (a: string) => (dispatch: Dispatch) => {
  dispatch({ type: FROM_CURRENCY, payload: a });
};

export const updateToCurrency = (a: string) => (dispatch: Dispatch) => {
  dispatch({ type: TO_CURRENCY, payload: a });
};

export const clearRate = () => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch({ type: CLEAR_RATE });
  }, 1);
};

export const sellCurrency =
  (input: number) => (dispatch: Dispatch, getState: () => RootState) => {
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

      const localPortfolio = JSON.parse(localStorage.getItem(user) || '');
      localStorage.setItem(
        user,
        JSON.stringify({
          ...localPortfolio,
          portfolio: newPortfolio,
        })
      );
      dispatch({ type: SELL_CURRENCY, payload: newPortfolio });
    } else if (
      portfolio.filter((e) => e.acronym === fromCurrency)[0].totalAsset ===
      input
    ) {
      console.log(portfolio);
      let newPortfolio = portfolio.filter((e) => e.acronym !== fromCurrency);
      newPortfolio = newPortfolio.map((e) => {
        if (e.acronym === toCurrency) {
          return { ...e, totalAsset: e.totalAsset + input * rate };
        }
        return e;
      });
      const localPortfolio = JSON.parse(localStorage.getItem(user) || '');
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
        payload: 'You dont have enough balance',
      });

      setTimeout(() => {
        dispatch({
          type: CLEAR_ERROR,
        });
      }, 3000);
    }
  };

export const buyCurrency =
  (input: number) => (dispatch: Dispatch, getState: () => RootState) => {
    const portfolio = getState().portfolioData;
    const fromCurrency = getState().codes.fromCurrency;
    const toCurrency = getState().codes.toCurrency;
    const rate = getState().codes.rates;
    const user = getState().auth.user.name;

    if (
      portfolio.filter((e) => e.acronym === toCurrency)[0].totalAsset >
      rate * input
    ) {
      console.log('ok');
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
      const localPortfolio = JSON.parse(localStorage.getItem(user) || '');
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
        payload: 'You dont have enough balance',
      });

      setTimeout(() => {
        dispatch({
          type: CLEAR_ERROR,
        });
      }, 3000);
    }
  };

export const buyCurrencyFromList =
  (input: number) => (dispatch: Dispatch, getState: () => RootState) => {
    const portfolio = getState().portfolioData;
    const toCurrency = getState().codes.toCurrency;
    const fromCurrency = getState().codes.fromCurrency;
    const user = getState().auth.user.name;
    const name = getState().codes.data.filter(
      (e: any) => e[0] === toCurrency
    )[0][1];

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
            name,
            totalAsset: input,
          },
        ];

        dispatch({ type: ADD_CURRENCY, payload: newPortfolio });
        const localPortfolio = JSON.parse(localStorage.getItem(user) || '');
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
        const localPortfolio = JSON.parse(localStorage.getItem(user) || '');
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
        payload: 'You dont have enough balance',
      });

      setTimeout(() => {
        dispatch({
          type: CLEAR_ERROR,
        });
      }, 3000);
    }
  };
export const dailyCurrency = () => (dispatch: Dispatch) => {
  axios.get(`https://finans.truncgil.com/v3/today.json`).then((res) =>
    dispatch({
      type: CURRENCY_DAILY_START,
      payload: { ...res.data },
    })
  );
};

export const currencyNews = (count: number) => (dispatch: Dispatch) => {
  axios
    .get(
      `https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=${count}`,
      {
        headers: {
          Authorization: 'x-rapidapi-host',
          'x-rapidapi-key':
            'b2649b1adbmsh465672d2c1b6ecep1b1b5bjsn85b3127af992',
        },
      }
    )
    .then((res) =>
      dispatch({
        type: CURRENCY_NEWS,
        payload: res.data.data.mostPopularEntries.assets,
      })
    );
};
