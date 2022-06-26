import { createSlice } from "@reduxjs/toolkit";
import { WindowType } from "../../types/windows_service/index";

interface StateType {
  windows: WindowType[];
}

const initialState: StateType = {
  windows: [{ id: "1", name: "test", type: "exp", x: 10, y: 10 }]
};

export const windowsServiceSlice = createSlice({
  name: "windowsServiceSlice",
  initialState,
  reducers: {
    addWindow: (state, action) => {
      const window: WindowType = action.payload;
      state.windows.push(window);
    },
    removeWindow: (state, action) => {
      console.log("remove window");
      let i = 0;

      state.windows.forEach((window) => {
        if (window.id === action.payload) {
          state.windows.splice(i, i);
        }
        i++;
      });
    }
  }
});

// Action creators are generated for each case reducer function
export const { addWindow, removeWindow } = windowsServiceSlice.actions;

export default windowsServiceSlice.reducer;
