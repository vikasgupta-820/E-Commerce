// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/CartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
