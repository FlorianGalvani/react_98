import { createSlice } from "@reduxjs/toolkit";
import { WindowType } from "types/windows_service/index";

interface StateType {
  windows: WindowType[];
  focusedWindow: number | null;
}

const initialState: StateType = {
  windows: [],
  focusedWindow: null
};

export const windowsServiceSlice = createSlice({
  name: "windowsServiceSlice",
  initialState,
  reducers: {
    addWindow: (state, action) => {
      console.log("add window");
      const window: WindowType = action.payload;
      if (state.windows.length > 0) {
        for (let index = 0; index < state.windows.length; index++) {
          state.windows[index].isFocused = false;
        }
      }
      state.focusedWindow = state.windows.length;
      state.windows.push(window);
    },
    removeWindow: (state, action) => {
      console.log("remove window");
      if (state.windows.length > 1) {
        let i = 0;
        state.windows.forEach((window) => {
          if (window.id == action.payload) {
            state.windows.splice(i, i);
          }
          i++;
        });
      } else {
        state.windows.pop();
      }
    },
    setFocusedWindow: (state, action) => {
      console.log("Window is " + action.payload + "focused");
      state.focusedWindow = action.payload;
    },
    unfocusWindow: (state) => {
      if (state.windows.length > 0) {
        for (let index = 0; index < state.windows.length; index++) {
          state.windows[index].isFocused = false;
        }
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { addWindow, removeWindow, unfocusWindow, setFocusedWindow } =
  windowsServiceSlice.actions;

export default windowsServiceSlice.reducer;
