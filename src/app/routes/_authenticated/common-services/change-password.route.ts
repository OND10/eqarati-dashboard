import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import ChangePassWordPage from "../../../../features/Authentication/pages/change-password";

export const ChangPasswordRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common-services/change-password",
  component: ChangePassWordPage,
});
