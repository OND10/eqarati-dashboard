import GroupController from '../../../services/api/common_services/group';
import EndpointPermissionController from '../../../services/api/common_services/endpoint-permission';
import { GroupResponseHandler } from '../../../features/common_services/types/groups';
import EndpointPermission, {
  EndpointPermissionResponse
} from '../../../features/common_services/types/endpoint-permission';
import { store } from '../../../services/Redux/store';
import { insertRoutePermissions } from '../../../services/Redux/slices/route-permissions';

export const fetchUserPermissions = async (
  userId: number
): Promise<GroupedPermissions> => {
  try {
    // 1.Fetch group-specific permissions
    const groupResponse: GroupResponseHandler = await GroupController.getAll(
      2500,
      `?user=${userId}`
    );

    const groupPermissionIds = Array.from(
      new Set(
        groupResponse.results.flatMap((group) => group.endpoint_permissions)
      )
    );
    const groupPermissions: EndpointPermission[] = await Promise.all(
      groupPermissionIds.map((id) => EndpointPermissionController.getById(id))
    );

    // 3. Fetch user-specific permissions
    const userPermissionResponse: EndpointPermissionResponse =
      await EndpointPermissionController.getAll(2000, `?user=${userId}`);
    const userPermissionIds = Array.from(
      new Set(userPermissionResponse.results.map((p) => p.id))
    );

    const userPermissions: EndpointPermission[] = await Promise.all(
      userPermissionIds.map((id) => EndpointPermissionController.getById(id))
    );

    // 4. Merge and deduplicate
    const allPermissions = [...groupPermissions, ...userPermissions];
    const permissionMap = new Map<number, EndpointPermission>();

    allPermissions.forEach((permission) => {
      permissionMap.set(permission.id, {
        ...permission,
        children: permission.children?.length ? permission.children : []
      });
    });

    // 5. Add parent and children if not present already
    for (const perm of permissionMap.values()) {
      // Add parent
      const parentId =
        typeof perm.parent_endpoint === 'number'
          ? perm.parent_endpoint
          : perm.parent_endpoint?.id;

      if (parentId && !permissionMap.has(parentId)) {
        const parentPerm = await EndpointPermissionController.getById(parentId);
        permissionMap.set(parentPerm.id, {
          ...parentPerm,
          children: parentPerm.children?.length ? parentPerm.children : []
        });
      }

      // Add children
      // if (perm.children?.length) {
      //   for (const child of perm.children) {
      //     if (!permissionMap.has(child.id)) {
      //       const fullChild = await EndpointPermissionController.getById(
      //         child.id
      //       );
      //       permissionMap.set(fullChild.id, {
      //         ...fullChild,
      //         children: fullChild.children?.length ? fullChild.children : [],
      //       });
      //     }
      //   }
      // }
    }

    // 6. Re-link parents and children
    const finalPermissions = Array.from(permissionMap.values());

    const idToPermission = new Map<number, EndpointPermission>();

    finalPermissions.forEach((perm) => {
      perm.children = [];
      idToPermission.set(perm.id, perm);
    });
    finalPermissions.forEach((perm) => {
      const parentId =
        typeof perm.parent_endpoint === 'number'
          ? perm.parent_endpoint
          : perm.parent_endpoint?.id;

      if (parentId && idToPermission.has(parentId)) {
        const parent = idToPermission.get(parentId)!;
        perm.parent_endpoint = parent;
        delete perm.parent_endpoint;
        parent.children?.push(perm);
      } else {
        perm.parent_endpoint = undefined;
      }
    });
    const wholePermissions = Array.from(idToPermission.values());
    const data = filterPermissionsByLevel(wholePermissions); // for logs purposes

    store.dispatch(
      insertRoutePermissions({
        levelOne: data.levelOne,
        levelTwo: data.levelTwo,
        levelThree: data.levelThree,
        levelFour: data.levelFour
      })
    );
    return filterPermissionsByLevel(wholePermissions);
  } catch (error) {
    console.trace('❌ Failed to fetch permissions:', error);
    throw error;
  }
};

export interface GroupedPermissions {
  levelOne: EndpointPermission[];
  levelTwo: EndpointPermission[];
  levelThree: EndpointPermission[];
  levelFour: EndpointPermission[];
}

export const filterPermissionsByLevel = (
  permissions: EndpointPermission[]
): GroupedPermissions => {
  const levelOne = permissions.filter((p) => p.level === 1);
  const levelTwo = permissions.filter((p) => p.level === 2);
  const levelThree = permissions.filter((p) => p.level === 3);
  const levelFour = permissions.filter((p) => p.level === 4);

  return {
    levelOne,
    levelTwo,
    levelThree,
    levelFour
  };
};
