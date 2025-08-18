import { configureStore } from "@reduxjs/toolkit";
import redux_slice from "./redux_slice";

export const store_redux = configureStore({
  reducer: {
    counter : redux_slice,
  },
});