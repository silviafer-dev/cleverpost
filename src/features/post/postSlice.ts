import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { iPost, iPostsState } from "../../interfaces";
import { toast } from "react-toastify";

const initialState: iPostsState = {
  status: "idle",
  posts: [],
  post: {},
};
const API = "https://jsonplaceholder.typicode.com/posts/";

export const fetchPosts = createAsyncThunk("get/fetchPosts", async () => {
  const response = await axios.get(API);
  return response.data;
});

export const fetchPostById = createAsyncThunk("get/fetchPost", async (id) => {
  const response = await axios.get(API + id);
  return response.data;
});

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

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (
      state: iPostsState,
      action: PayloadAction<number | string>
    ) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      notify("Post deleted with success!");
    },
    updatePost: (state: iPostsState, action: PayloadAction<iPost>) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id
          ? { ...post, body: action.payload.body }
          : post
      );
       notify("Post updated with success!");
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
    builder.addCase(
      fetchPostById.fulfilled,
      (state: iPostsState, action: PayloadAction<iPost[]>) => {
        state.status = "succeeded";
        state.post = action.payload;
      }
    );
  },
});

export default postsSlice.reducer;
export const { deletePost, updatePost } = postsSlice.actions;
export const selectState = (state: RootState) => state.posts.posts;
export const selectStateDetails = (state: RootState) => state.posts.post;
