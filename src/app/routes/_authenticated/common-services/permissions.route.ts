import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import ListPermissionPage from "../../../../features/common_services/permissions/pages/list-permission-page";

export const PermissionRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common-services/permissions",
  component: ListPermissionPage,
});
