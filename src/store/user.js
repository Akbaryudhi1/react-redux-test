import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    initUserData: (state, action) => {
      state.listProduk.push(action.payload);
    },
    changeUsername: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { initUserData, changeUsername } = userSlice.actions;
export default userSlice.reducer;
