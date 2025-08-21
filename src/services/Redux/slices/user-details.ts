import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserPartialResponse } from '../../../features/common_services/types/user';

const initialState: UserPartialResponse = {
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  id: 0,
  groups: [],
  is_active: false,
  password_changed: false
};

export const userDetailsInfoSlice = createSlice({
  name: 'userDetailsInfo',
  initialState,
  reducers: {
    insertUserDetailsInfo: (
      state,
      action: PayloadAction<UserPartialResponse>
    ) => {
      state.username = action.payload.username;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.groups = action.payload.groups;
      state.is_active = action.payload.is_active;
      state.password_changed = action.payload.password_changed;
    },
    removeUserDetailsInfo: (state) => {
      state = initialState;
    }
  }
});

export const { insertUserDetailsInfo, removeUserDetailsInfo } =
  userDetailsInfoSlice.actions;
export default userDetailsInfoSlice.reducer;
