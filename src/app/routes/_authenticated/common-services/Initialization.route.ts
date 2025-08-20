import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import InitializationPage from "../../../../features/common_services/pages/Initialization";
export const InitializationRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common-services/inits",
  component: InitializationPage,
});
