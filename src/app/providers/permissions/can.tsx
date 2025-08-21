import { ReactNode, useState } from 'react';
import { usePermissions } from './hooks';
import { Loader } from '@mantine/core';

type CanProps = {
  permission?: string;
  permissions?: string[];
  children: ReactNode;
  fallback?: ReactNode;
};

export const Can = ({
  permission,
  permissions,
  children,
  fallback = null
}: CanProps) => {
  const { hasPermission, isLoading } = usePermissions();
  const [hasAnyPermission, setHasAnyPermission] = useState<boolean>(false);
  const [appliedOnce, setAppliedOnce] = useState(false);

  //   console.log("permissions from can component ");
  //   console.log(permission);
  if (isLoading) return <Loader />; // or spinner

  if (permission && !appliedOnce) {
    const info = hasPermission(permission);
    setHasAnyPermission(info);
    setAppliedOnce(true);
  }

  if (permissions && permissions.length >= 1 && !appliedOnce) {
    permissions.map((singlePermission) => {
      hasPermission(singlePermission) ? setHasAnyPermission(true) : null;
    });
    setAppliedOnce(true);
  }
  //   console.log(permissions);
  //   console.log(hasPermission(permission));

  return hasAnyPermission ? <>{children}</> : <>{fallback}</>;
};
