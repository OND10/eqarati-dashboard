import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { EditLecturerPage } from "../../../../features/quran-wiki/lecturers/pages/edit-lecturer-page";

export const EditLecturerRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran-wiki/edit-lecturer/$id",
  component: EditLecturerPage,
});
