import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/TodoSlice";

let store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: true,
});

export default store;
