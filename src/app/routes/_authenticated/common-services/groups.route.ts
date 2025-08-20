import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import ListGroupPage from "../../../../features/common_services/groups/pages/list-group-page";
export const GroupsRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common-services/groups",
  component: ListGroupPage,
});
