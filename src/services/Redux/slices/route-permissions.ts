import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import EndpointPermission from '../../../features/common_services/types/endpoint-permission';

interface GroupedPermissions {
  levelOne: Omit<EndpointPermission, 'children'>[];
  levelTwo: Omit<EndpointPermission, 'children'>[];
  levelThree: Omit<EndpointPermission, 'children'>[];
  levelFour: Omit<EndpointPermission, 'children'>[];
}

export interface RoutePermissions {
  levelOne: string[];
  levelTwo: string[];
  levelThree: string[];
  levelFour: string[];
}

const initialState: RoutePermissions = {
  levelOne: [],
  levelTwo: [],
  levelThree: [],
  levelFour: []
};

export const routePermissionSlice = createSlice({
  initialState,
  name: 'routePermission',
  reducers: {
    insertRoutePermissions: (
      state,
      action: PayloadAction<GroupedPermissions>
    ) => {
      state.levelOne = action.payload.levelOne.map(
        (permission) => permission.endpoint
      );
      state.levelTwo = action.payload.levelTwo.map(
        (permission) => permission.endpoint
      );
      state.levelThree = action.payload.levelThree.map(
        (permission) => permission.endpoint
      );
      state.levelFour = action.payload.levelFour.map(
        (permission) => permission.endpoint
      );
    }
  }
});

export const { insertRoutePermissions } = routePermissionSlice.actions;
export default routePermissionSlice.reducer;
