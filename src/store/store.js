import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Reducers/authReducer';
import { currencyReducer } from './Reducers/currencyReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    data: currencyReducer,
  },
});
