import { configureStore } from "@reduxjs/toolkit";
import startMenuSlice from "../features/start_menu/startMenuSlice";

export default configureStore({
  reducer: {
    startMenuSlice: startMenuSlice
  }
});
