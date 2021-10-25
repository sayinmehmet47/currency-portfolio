import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/authReducer";
import { currencyReducer } from "./Reducers/currencyReducer";
import { portfolioReducer } from "./Reducers/portfolioReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    codes: currencyReducer,
    portfolioData: portfolioReducer,
  },
});
