import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "../../app/store";
import { IFavPostState, IPost } from "../../interfaces";


const localStore: string | null = localStorage.getItem("favoritePost");

const initialState: IFavPostState = {
  collection: localStore ? JSON.parse(localStore) : [],
};
const notify = (message: string) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
  });
};

const favPostsSlice = createSlice({
  name: "favPosts",
  initialState,
  reducers: {
    addPost(state: IFavPostState, action: PayloadAction<IPost>) {
      state.collection.push(action.payload);
      localStorage.setItem("favoritePost", JSON.stringify(state.collection));
      notify("Post added to favorite with success!");
    },
    removePost(state: IFavPostState, action: PayloadAction<string | number>) {
      const newStatePosts = state.collection.filter(
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem("favoritePost", JSON.stringify(newStatePosts));
      notify("Post remove from favorite with success!");
      return { ...state, collection: newStatePosts };
    },
  },
});

export const { addPost, removePost } = favPostsSlice.actions;

export default favPostsSlice.reducer;

export const selectFavoriteState = (state: RootState) =>
  state.favoritePosts.collection;
