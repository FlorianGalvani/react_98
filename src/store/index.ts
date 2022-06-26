import { configureStore } from "@reduxjs/toolkit";
import startMenuSlice from "../features/start_menu/startMenuSlice";

export const store = configureStore({
  reducer: {
    startMenuSlice: startMenuSlice
  }
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
