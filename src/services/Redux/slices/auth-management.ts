import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { showToast } from '../../../common/components/UI/toast/Toast-Singleton';

export interface authToken {
  token: string;
}

const initialState: authToken = {
  token: ''
};

export const authTokenManagementSlice = createSlice({
  name: 'authToken',
  initialState: initialState,
  reducers: {
    insertNewToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      //FOR TESTING ONLY
      // setTimeout(() => {

      //   showToast(
      //     "Token Success",
      //     "newToken created successfully",
      //     "success",
      //     3000
      //   );
      // }, 500);
    },

    removeToken: (state) => {
      state.token = '';
      //FOR TESTING ONLY
      // setTimeout(() => {

      //   showToast("Token Removed", "Token removal success", "success", 3000);
      // }, 500);
    }
  }
});

export const { insertNewToken, removeToken } = authTokenManagementSlice.actions;
export default authTokenManagementSlice.reducer;
