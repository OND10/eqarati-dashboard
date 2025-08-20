import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import ListSystemVariablePage from "../../../../features/common_services/system-variables/pages/list-system-variable-page";
export const SystemVariablesRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common-services/system-variables",
  component: ListSystemVariablePage,
});
