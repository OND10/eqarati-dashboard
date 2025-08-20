import { createRoute } from "@tanstack/react-router";
import SignIn_Page from "../../../features/Authentication/pages/sign-In";
import { NoAuthRoute } from "../main";

export const SignInRoute = createRoute({
  getParentRoute: () => NoAuthRoute,
  path: "/signIn",
  component: SignIn_Page,
});
