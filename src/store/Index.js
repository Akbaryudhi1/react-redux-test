import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import counterReducer from "./counter";

const reducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

const store = configureStore({ reducer });

export default store;
