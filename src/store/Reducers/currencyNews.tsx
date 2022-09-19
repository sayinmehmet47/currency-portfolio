import { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { CURRENCY_NEWS } from '../Actions/actions';

type OneNews = {
  headline: string;
  promoImage: any;
  description: any;
};

interface INewsDaily {
  news: OneNews[];
}

const initialState: INewsDaily = {
  news: [],
};

export const newsDaily = (
  state = initialState,
  action: PayloadAction<[], any>
) => {
  switch (action.type) {
    case CURRENCY_NEWS:
      return { ...state, news: action.payload };

    default:
      return state;
  }
};
