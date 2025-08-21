import { createContext, useEffect, useState } from 'react';
import { QueryObserverSuccessResult, useQuery } from '@tanstack/react-query';
import {
  useAppDispatch,
  useAppSelector
} from '../../../common/hooks/useAppRedux';
import { fetchUserPermissions, GroupedPermissions } from './api';
import { PermissionContextType } from './types';
import EndpointPermission from '../../../features/common_services/types/endpoint-permission';
import { tokenDetails } from '../../../services/Auth/utils';
import { Alert } from '@mantine/core';
import { AlertCircleIcon } from 'lucide-react';
import UiSpacer from '../../../common/components/UI/spacer/spacer';
import { insertRoutePermissions } from '../../../services/Redux/slices/route-permissions';
import { updateGlobalLoader } from '../../../services/Redux/slices/global-loader';

export const PermissionsContext = createContext<
  PermissionContextType | undefined
>(undefined);

export const PermissionsProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const dispatch = useAppDispatch(); // to insert lvl 1 -> 3 permissions (usually front routes/paths)
  const userDetails = useAppSelector((state) => state.userDetailsInfo);
  const [permissions, setPermissions] = useState<{
    levelThree: EndpointPermission[];
    levelFour: EndpointPermission[];
  }>({ levelThree: [], levelFour: [] });

  const query = useQuery<GroupedPermissions>({
    queryKey: ['user-permissions', userDetails.id],
    queryFn: () => fetchUserPermissions(userDetails.id),
    enabled: userDetails.password_changed,
    staleTime: 1000 * 60, // 1 min
    retry: 1,
    refetchOnMount: 'always'
  });

  useEffect(() => {
    query.isFetching && dispatch(updateGlobalLoader({ isLoading: true }));
    // always check and update local state permissions and global state route permissions
    if (query.isSuccess) {
      setPermissions({
        levelThree: query.data.levelThree,
        levelFour: query.data.levelFour
      });
      dispatch(
        insertRoutePermissions({
          levelOne: query.data.levelOne,
          levelTwo: query.data.levelTwo,
          levelThree: query.data.levelThree,
          levelFour: query.data.levelFour
        })
      );
      dispatch(updateGlobalLoader({ isLoading: false }));
    }
  }, [query.isSuccess, query.isFetching]);

  const hasPermission = (endpoint: string): boolean => {
    // console.error("has permission")
    if (query.isLoading) return false;
    if (
      permissions.levelFour.length >= 1 ||
      permissions.levelFour.length >= 1
    ) {
      const wantedBackPermissionFromState = permissions.levelFour.filter(
        (permission) => {
          return permission.endpoint == endpoint;
        }
      );
      const wantedRoutePermissionFromState = permissions.levelThree.filter(
        (permission) => {
          return permission.endpoint == endpoint;
        }
      );
      //Original look up location from state
      // console.warn("LOOK UP LOCAL STATE");
      // console.log(wantedPermissionFromState);

      return wantedBackPermissionFromState.length >= 1
        ? true
        : wantedRoutePermissionFromState.length >= 1
          ? true
          : false;
    }

    if (
      query.isSuccess &&
      (query.data.levelFour.length >= 1 || query.data.levelThree.length >= 1)
    ) {
      const wantedBackPermissionFromQuery = query.data.levelFour.filter(
        (permission) => {
          return permission.endpoint == endpoint;
        }
      );

      const wantedRoutePermissionFromQuery = query.data.levelThree.filter(
        (permission) => {
          return permission.endpoint == endpoint;
        }
      );
      //FallBack look up in the query
      // console.warn("LOOK UP FROM QUERY");
      return wantedBackPermissionFromQuery.length >= 1
        ? true
        : wantedRoutePermissionFromQuery.length >= 1
          ? true
          : false;
    }
    console.error('Permissions are not initialized or the query failed');
    return false;
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        isLoading: query.isLoading,
        error: query.failureReason ?? null,
        refreshPermissions: () => query.refetch(),
        hasPermission
      }}
    >
      {/* improved error handling as this part is so sensitive */}
      {/* Improve later with more beautiful error screen */}
      {query.isError ? (
        <div
          dir='ltr'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '1000px'
          }}
        >
          <Alert color='red' title='Error' icon={<AlertCircleIcon />}>
            {query.error.message}
          </Alert>
          <UiSpacer height={30} />
        </div>
      ) : (
        children
      )}
    </PermissionsContext.Provider>
  );
};
