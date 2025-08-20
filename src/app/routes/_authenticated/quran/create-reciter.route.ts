import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import CreateReciterPage from "../../../../features/quran/pages/create-reciter-page/create-reciter-page";

export const CreateReciterRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran/reciter/create-reciter",
  component: CreateReciterPage,
});
