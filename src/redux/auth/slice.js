import { createSlice } from "@reduxjs/toolkit";
import { register, login, refresh, logout } from "./operations";
import storage from "redux-persist/lib/storage";

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
  },
  extraReducers: (bilder) => {
    bilder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        const { token, user } = action.payload;

        state.user.name = user.name;
        state.user.email = user.email;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(state.user.name);
        const {
          token,
          user: { name, email },
        } = action.payload;

        state.user.name = name;
        state.user.email = email;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        const { name, email } = action.payload;
        state.isLoggedIn = true;
        state.user.name = name;
        state.user.email = email;
      });
  },
});

export default authSlice.reducer;
