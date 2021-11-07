import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/authReducer";
import { currencyDailyReducer } from "./Reducers/currencyDaily";
import { currencyNews } from "./Reducers/currencyNews";
import { currencyReducer } from "./Reducers/currencyReducer";
import { portfolioReducer } from "./Reducers/portfolioReducer";
import { totalAssetsReducer } from "./Reducers/totalAssetsReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    codes: currencyReducer,
    portfolioData: portfolioReducer,
    totalAssets: totalAssetsReducer,
    currencyDaily: currencyDailyReducer,
    currencyNews: currencyNews,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
});
