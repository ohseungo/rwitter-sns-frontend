import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  user?: User;
}

interface User {
  name: string;
}

const initialState = {
  isLoggedIn: false,
  user: undefined,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
