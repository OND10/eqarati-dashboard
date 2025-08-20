import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import EditGroupPage from "../../../../features/common_services/groups/pages/edit-group-page";

export const UpdateGroupRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common_services/edit-group/$id",
  component: EditGroupPage,
});
