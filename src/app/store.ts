import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import postsReducer from "../features/post/postSlice";
import favoritePostReducer from '../features/post/favSlices'


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    favoritePosts: favoritePostReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
