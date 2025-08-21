import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reciter } from '../../../features/quran/types/reciter';

const initialState: Reciter | {} = {};

export const reciterInfoSlice = createSlice({
  name: 'reciterInfo',
  initialState,
  reducers: {
    insertReciterInfo: (state, action: PayloadAction<Reciter>) => {
      state = action.payload;
    },
    removeReciterInfo: (state) => {
      state = {};
    }
  }
});

export const { insertReciterInfo, removeReciterInfo } =
  reciterInfoSlice.actions;
export default reciterInfoSlice.reducer;
