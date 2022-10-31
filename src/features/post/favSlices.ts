import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IPost } from "../../interfaces";

export interface IFavPostState {
  collection: IPost[] ;
}

const localStore: string | null = localStorage.getItem("favoritePost");

const initialState: IFavPostState = {
  collection: localStore ? JSON.parse(localStore) : [],
};

const favPostsSlice = createSlice({
  name: "favPosts",
  initialState,
  reducers: {
    addPost(state: IFavPostState, action: PayloadAction<IPost>) {
      state.collection.push(action.payload);
      localStorage.setItem("favoritePost", JSON.stringify(state.collection));
    },
    removePost(state: IFavPostState, action: PayloadAction<string | number>) {
      const newStatePosts = state.collection.filter(
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem("favoritePhoto", JSON.stringify(newStatePosts));
      return { ...state, collection: newStatePosts };
    },
  },
});

export const { addPost, removePost } = favPostsSlice.actions;

export default favPostsSlice.reducer;

export const selectFavoriteState = (state: RootState) =>
  state.favoritePosts.collection;
