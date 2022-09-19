import { AnyAction } from '@reduxjs/toolkit';
import {
  CLEAR_ERROR,
  CLEAR_RATE,
  CURRENCY_LOADED,
  CURRENCY_LOADING,
  CURRENCY_RATE,
  FROM_CURRENCY,
  TO_CURRENCY,
  UNSUFFICENT_BALANCE,
} from '../Actions/actions';

export interface ICurrency {
  data: any[];
  rates: string;
  fromCurrency: string;
  toCurrency: string;
  date: string;
  loading: boolean;
  error: string;
}

const initialState: ICurrency = {
  data: [],
  rates: '',
  fromCurrency: 'USD',
  toCurrency: 'USD',
  date: '',
  loading: false,
  error: '',
};

export const currencyReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CURRENCY_LOADING:
      return {
        ...state,
        loading: true,
        date: new Date(Date.now()).toUTCString(),
      };
    case CURRENCY_LOADED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case CURRENCY_RATE:
      return {
        ...state,
        rates: action.payload,
        date: new Date(Date.now()).toUTCString(),
      };

    case FROM_CURRENCY:
      return {
        ...state,
        fromCurrency: action.payload,
      };
    case TO_CURRENCY:
      return {
        ...state,
        toCurrency: action.payload,
      };
    case CLEAR_RATE:
      return {
        ...state,
        rates: '',
      };

    case UNSUFFICENT_BALANCE:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};
