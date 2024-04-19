import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUSerSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    updateUserFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.error = null;
    },
    deleteUserFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logOutUserStart: (state) => {
      state.loading = true;
    },
    logOutUserSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.error = null;
    },
    logOutUserFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUSerSuccess,
  updateUserStart,
  updateUserFailed,
  deleteUserStart,
  deleteUserFailed,
  deleteUserSuccess,
  logOutUserFailed,
  logOutUserStart,
  logOutUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
