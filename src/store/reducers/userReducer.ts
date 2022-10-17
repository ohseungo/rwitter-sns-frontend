import { createReducer } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  name: string;
}

const initialState = {
  isLoggedIn: false,
  name: "Me",
} as UserState;

const userReducer = createReducer(initialState, (builder) => {});

export default userReducer;
