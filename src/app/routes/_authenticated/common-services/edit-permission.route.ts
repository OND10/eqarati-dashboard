import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import EditPermissionPage from "../../../../features/common_services/permissions/pages/edit-permission-page";

export const UpdatePermissionRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common_services/edit-permission/$id",
  component: EditPermissionPage,
});
