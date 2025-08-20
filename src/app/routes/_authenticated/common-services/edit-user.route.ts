import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import EditUserPage from "../../../../features/common_services/users/pages/edit-user-page";

export const UpdateUserRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common_services/edit-user/$id",
  component: EditUserPage,
});
