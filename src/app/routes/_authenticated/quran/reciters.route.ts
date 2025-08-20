import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { RecitersPage } from "../../../../features/quran/pages/reciters-page";

export const RecitersRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran/reciters",
  component: RecitersPage,
});
