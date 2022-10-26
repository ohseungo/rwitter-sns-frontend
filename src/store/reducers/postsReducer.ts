import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const dummyPost = {
  id: "2",
  CreatedUser: {
    id: "friend",
    name: "friend",
  },
  content: "추가 테스트",
} as Post;

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      return {
        ...state,
        posts: [dummyPost, ...state.posts],
      };
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
