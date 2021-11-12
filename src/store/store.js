import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { authReducer } from "./Reducers/authReducer";
import { currencyReducer } from "./Reducers/currencyReducer";
import { portfolioReducer } from "./Reducers/portfolioReducer";
import { totalAssetsReducer } from "./Reducers/totalAssetsReducer";
import { currencyDailyReducer } from "./Reducers/currencyDaily";
import { currencyNews } from "./Actions/currencyActions";

const reducers = combineReducers({
  auth: authReducer,
  codes: currencyReducer,
  portfolioData: portfolioReducer,
  totalAssets: totalAssetsReducer,
  currencyDaily: currencyDailyReducer,
  currencyNews: currencyNews,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     codes: currencyReducer,
//     portfolioData: portfolioReducer,
//     totalAssets: totalAssetsReducer,
//     currencyDaily: currencyDailyReducer,
//     currencyNews: currencyNews,
//   },
// });
