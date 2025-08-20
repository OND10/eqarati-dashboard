import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { ReciterOverViewPage } from "../../../../features/quran/pages/reciter-overview-page";

export const ReciterOverviewRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran/reciters/reciter-overview/$id/$recitationId",
  component: ReciterOverViewPage,
});
