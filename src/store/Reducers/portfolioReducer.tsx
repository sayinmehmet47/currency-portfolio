import { PayloadAction } from '@reduxjs/toolkit';
import { IPortfolio } from '../../shared/interfaces';
import {
  ADD_CURRENCY,
  BUY_CURRENCY,
  PORTFOLIO_START,
  SELL_CURRENCY,
  USER_LOGOUT,
} from '../Actions/actions';

const initialState: IPortfolio[] = [];

export const portfolioReducer = (
  state = initialState,
  action: PayloadAction<[], any>
) => {
  switch (action.type) {
    case PORTFOLIO_START:
      return action.payload;
    case USER_LOGOUT:
      return [];
    case SELL_CURRENCY:
      return action.payload;
    case BUY_CURRENCY:
      return action.payload;
    case ADD_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};
