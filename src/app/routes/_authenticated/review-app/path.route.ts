import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { PathContainer } from "../../../../features/review-app/containers/path-container";

export const FormsForPathRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/review-app/path",
  component: PathContainer,
});
