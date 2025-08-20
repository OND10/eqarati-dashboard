import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import CreateRecitationPage from '../../../../features/quran/pages/create-recitation-page/create-recitation-page';

export const CreateRecitationRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran/recitations/create-recitation",
  component: CreateRecitationPage,
});
