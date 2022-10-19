import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  user?: UserType;
}

interface UserType {
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
    login(state) {},
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
