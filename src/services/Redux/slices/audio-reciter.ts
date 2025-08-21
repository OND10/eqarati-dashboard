import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface audioReciterData {
  reciter: number;
  recitation: string;
}

const initalData: audioReciterData = {
  reciter: 1,
  recitation: 'ibrahim'
};

export const audioReciterSlice = createSlice({
  name: 'audioReciter',
  initialState: initalData,
  reducers: {
    saveNewReciter: (state, action: PayloadAction<audioReciterData>) => {
      state.recitation = action.payload.recitation;
      state.reciter = action.payload.reciter;
    }
  }
});

export const { saveNewReciter } = audioReciterSlice.actions;
export default audioReciterSlice.reducer;
