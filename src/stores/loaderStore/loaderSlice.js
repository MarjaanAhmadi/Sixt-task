import { createSlice } from "@reduxjs/toolkit";

//define loading reducer to set loading status for async calls
const initialState = {
  loading: false,
};

const baseSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoaderApp: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { actions } = baseSlice;
export const { setLoaderApp } = actions;

// selectors
export const selLoaderLoading = (state) => state.loading.loading;

const reducer = {
  loading: baseSlice.reducer,
};

export default reducer;
