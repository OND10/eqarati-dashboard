import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import EditRecitationPage from "../../../../features/quran/pages/edit-recitation-page/edit-recitation-page";

export const UpdateRecitationRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran/edit-recitation/$id",
  component: EditRecitationPage,
});
