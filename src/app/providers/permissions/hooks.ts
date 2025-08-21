import { useContext } from 'react';
import { PermissionsContext } from './context';
import { PermissionContextType } from './types';

export const usePermissions = (): PermissionContextType => {
  const ctx = useContext(PermissionsContext);
  if (!ctx)
    throw new Error('usePermissions must be used within a PermissionsProvider');
  return ctx;
};
