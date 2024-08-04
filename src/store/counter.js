import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter = state.counter + 1;
    },
    decrementCounter: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
