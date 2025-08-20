import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import RecitationsPage from "../../../../features/quran/pages/recitations-page";

export const RecitationsRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran/recitations",
  component: RecitationsPage,
});
