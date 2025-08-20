import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import CreatePermissionPage from "../../../../features/common_services/permissions/pages/create-permission-page";

export const CreatePermissionRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common_services/create-permission",
  component: CreatePermissionPage,
});
