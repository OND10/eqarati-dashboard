import { configureStore } from '@reduxjs/toolkit';
import { authTokenManagementSlice } from './slices/auth-management';
import { reciterInfoSlice } from './slices/reciter-info';
import { globalLoaderSlice } from './slices/global-loader';
import { audioReciterSlice } from './slices/audio-reciter';
import { quranPlayerState } from './slices/quran-audio-player';
import { routePermissionSlice } from './slices/route-permissions';
import { userDetailsInfoSlice } from './slices/user-details';

export const store = configureStore({
  reducer: {
    authToken: authTokenManagementSlice.reducer,
    reciterInfo: reciterInfoSlice.reducer,
    globalLoader: globalLoaderSlice.reducer,
    audioReciter: audioReciterSlice.reducer,
    quranPlayerState: quranPlayerState.reducer,
    routePermission: routePermissionSlice.reducer,
    userDetailsInfo: userDetailsInfoSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
