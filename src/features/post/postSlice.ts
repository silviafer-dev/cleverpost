import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { iPostsState } from "../../interfaces";

const initialState: iPostsState = {
  status: "idle",
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    });
  },
});

export default postsSlice.reducer;
export const selectState = (postSlices: any) => postSlices.posts;
