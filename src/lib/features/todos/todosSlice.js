import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getTodos: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    successTodos: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
      state.error = null;
    },
    errorTodos: (state, action) => {
      state.isLoading = false;
      state.todos = [];
      state.error = action.payload;
    },
  },
});

export const { getTodos, successTodos, errorTodos } = todosSlice.actions;
export default todosSlice.reducer;
