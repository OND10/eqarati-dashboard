import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { FahrasPage } from "../../../../features/quran/pages/fahras-Page";

export const FaharsRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran/fahras",
  component: FahrasPage,
});
