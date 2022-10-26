import { createSlice } from "@reduxjs/toolkit";

interface PostsState {
  posts: Post[];
}

interface Post {
  id: string;
  CreatedUser: User;
  content: string;
}

interface User {
  id: string;
  name: string;
}

const initialState = {
  posts: [],
} as PostsState;

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
