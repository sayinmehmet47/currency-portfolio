import { AnyAction } from '@reduxjs/toolkit';
import { CURRENCY_DAILY_START } from '../Actions/actions';

interface ICurrencyDaily {
  fromTRY: string;
}

const initialState: ICurrencyDaily = {
  fromTRY: '',
};

export const currencyDailyReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case CURRENCY_DAILY_START:
      return action.payload;

    default:
      return state;
  }
};
