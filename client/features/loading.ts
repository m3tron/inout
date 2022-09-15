import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { loading } = loadingSlice.actions;

export default loadingSlice.reducer;
