import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { EditReciterPage } from "../../../../features/quran/pages/edit-reciter-page";

export const UpdateReciterRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran/edit-reciter/$id",
  component: EditReciterPage,
});
