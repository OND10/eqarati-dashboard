import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuranPlayerStateprops {
  reciter: number;
  recitation: number;
}

const initialState: QuranPlayerStateprops = {
  recitation: NaN,
  reciter: NaN
};

export const quranPlayerState = createSlice({
  name: 'quranPlayerState',
  initialState,
  reducers: {
    updateQuranAudioState: (
      state,
      action: PayloadAction<QuranPlayerStateprops>
    ) => {
      state.recitation = action.payload.recitation;
      state.reciter = action.payload.reciter;
    }
  }
});

export const { updateQuranAudioState } = quranPlayerState.actions;
export default quranPlayerState.reducer;
