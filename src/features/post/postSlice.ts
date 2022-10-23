import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { iPost, iPostsState } from "../../interfaces";

const initialState: iPostsState = {
  status: "idle",
  posts: [],
};
const API = "https://jsonplaceholder.typicode.com/posts/";

export const fetchPosts = createAsyncThunk("get/fetchPosts", async () => {
  const response = await axios.get(API);
  return response.data;
});
interface iUpdate {
  id: string | number;
  body: string;
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (
      state: iPostsState,
      action: PayloadAction<number | string>
    ) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state: iPostsState, action: PayloadAction<iPost>) => {
      state.posts= state.posts.map((post) =>
        post.id === action.payload.id ? { ...post, body: action.payload.body } : post
      );
     
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchPosts.fulfilled,
      (state: iPostsState, action: PayloadAction<iPost[]>) => {
        state.status = "succeeded";
        state.posts = action.payload;
      }
    );
  },
});

export default postsSlice.reducer;
export const { deletePost, updatePost } = postsSlice.actions;
export const selectState = (state: RootState) => state.posts.posts;
