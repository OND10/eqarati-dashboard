import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalLoader {
  isLoading: boolean;
  // progress : number
}

const initialState: GlobalLoader = {
  isLoading: false
  // progress : 0
};

export const globalLoaderSlice = createSlice({
  name: 'globalLoader',
  initialState,
  reducers: {
    updateGlobalLoader: (state, action: PayloadAction<GlobalLoader>) => {
      state.isLoading = action.payload.isLoading;
      // state.progress = action.payload.progress
    }
  }
});

export const { updateGlobalLoader } = globalLoaderSlice.actions;
export default globalLoaderSlice.reducer;
