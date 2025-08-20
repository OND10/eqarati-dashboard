import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { PathPage } from "../../../../features/review-app/pages/path-page";

export const PathsRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/review-app/paths",
  component: PathPage,
});
