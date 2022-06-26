import { configureStore } from "@reduxjs/toolkit";
import startMenuSlice from "../features/start_menu/startMenuSlice";
import windowsServiceSlice from "../features/windows_service/windowsServiceSlice";

export const store = configureStore({
  reducer: {
    startMenuSlice: startMenuSlice,
    windowsServiceSlice: windowsServiceSlice
  }
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
