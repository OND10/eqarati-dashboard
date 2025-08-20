import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { ProfileContainer } from "../../../../features/common_services/users/components/profile/profile.container";
export const ProfileRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/common-services/profile",
  component: ProfileContainer,
});
