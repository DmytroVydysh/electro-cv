import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user_id?: string;
}

const initState: AuthState = {
  isAuthenticated: false,
  user_id: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user_id = action.payload.user_id;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user_id = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;