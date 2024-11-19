import { createSlice } from "@reduxjs/toolkit";

interface LangState {
  lang: string;
}

const initState: LangState = {
  lang: "en",
};

const authSlice = createSlice({
  name: "language",
  initialState: initState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload);


      
    },
  },
});

export const { setLanguage } = authSlice.actions;
export default authSlice.reducer;