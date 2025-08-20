import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { ListUserPage } from "../../../../features/common_services/users/pages/list-user-page";
export const UsersRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common-services/users",
  component: ListUserPage,
});
