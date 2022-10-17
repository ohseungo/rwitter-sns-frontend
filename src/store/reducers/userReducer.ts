import { createReducer } from "@reduxjs/toolkit";

interface UserState {
  name: string;
}

const initialState = {
  name: "Me",
} as UserState;

const userReducer = createReducer(initialState, (builder) => {});

export default userReducer;
