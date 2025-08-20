import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { EditPersonalInfoPage } from "../../../../features/quran-wiki/lecturers/pages/edit-personal-info";

export const EditPersonalInfoRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran-wiki/lecturer-overview/edit-personal-info/$id",
  component: EditPersonalInfoPage,
});
