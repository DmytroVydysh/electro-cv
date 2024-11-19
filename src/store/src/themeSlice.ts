import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const initState: ThemeState = {
  theme: "dark",
};

const authSlice = createSlice({
  name: "theme",
  initialState: initState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
      document.documentElement.setAttribute('data-theme', action.payload);
    },
  },
});

export const { setTheme } = authSlice.actions;
export default authSlice.reducer;