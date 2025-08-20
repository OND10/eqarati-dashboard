import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import CreateGroupPage from "../../../../features/common_services/groups/pages/create-group-page";

export const CreateGroupRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common-services/create-group",
  component: CreateGroupPage,
});
