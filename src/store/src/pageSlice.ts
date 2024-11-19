import { createSlice } from "@reduxjs/toolkit";

interface PageState {
  name: string;
}

const initState: PageState = {
  name: "",
};

const pageNameSlice = createSlice({
  name: "page",
  initialState: initState,
  reducers: {
    setPageName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setPageName } = pageNameSlice.actions;
export default pageNameSlice.reducer;