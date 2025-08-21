import { QueryObserverResult } from '@tanstack/react-query';
import EndpointPermission from '../../../features/common_services/types/endpoint-permission';
import { GroupedPermissions } from './api';

export type PermissionContextType = {
  permissions: {
    levelThree: EndpointPermission[];
    levelFour: EndpointPermission[];
  };
  hasPermission: (requiredPermission: string) => boolean;
  isLoading: boolean;
  error: Error | null;
  refreshPermissions: () => Promise<
    QueryObserverResult<GroupedPermissions, Error>
  >;
};
