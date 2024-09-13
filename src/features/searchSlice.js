import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },

  reducers: {
    getQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { getQuery } = searchSlice.actions;
export default searchSlice.reducer;
