import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../main";
import App from "../../../App";

export const HomeRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/",
  component: App,
});
