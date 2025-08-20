import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import CreateSystemVariablePage from "../../../../features/common_services/system-variables/pages/create-system-variable-page";

export const CreateSystemVariableRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common_services/create-system-variable",
  component: CreateSystemVariablePage,
});
