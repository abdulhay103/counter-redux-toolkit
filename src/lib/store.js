"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import todosReducer from "./features/todos/todosSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      todos: todosReducer,
    },
  });
};
