import { createSlice } from "@reduxjs/toolkit";

export const startMenuSlice = createSlice({
  name: "startMenuSlice",
  initialState: {
    value: 0,
    isOpen: false
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    toggleVisibility: (state, action) => {
      state.isOpen = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, toggleVisibility } = startMenuSlice.actions;

export default startMenuSlice.reducer;
