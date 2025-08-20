import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import EditSystemVariablePage from "../../../../features/common_services/system-variables/pages/edit-system-variable-page copy";

export const UpdateSystemVariableRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common_services/edit-system-variable/$id",
  component: EditSystemVariablePage,
});
