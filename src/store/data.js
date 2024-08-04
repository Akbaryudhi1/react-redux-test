import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 0,
};

const dataSlice = createSlice({
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
