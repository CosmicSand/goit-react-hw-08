import { createSlice } from "@reduxjs/toolkit";
import { register, login, refresh, logout } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: false,
  },
  extraReducers: (bilder) => {
    bilder
      .addCase(register.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        state.isLoading = false;
        state.user.name = user.name;
        state.user.email = user.email;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(login.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(state.user.name);
        const {
          token,
          user: { name, email },
        } = action.payload;
        state.isLoading = false;
        state.user.name = name;
        state.user.email = email;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user.name = null;
        state.user.email = null;
      })
      .addCase(refresh.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        const { name, email } = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user.name = name;
        state.user.email = email;
      });
  },
});

export default authSlice.reducer;
