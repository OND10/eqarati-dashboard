import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { LecturersPage } from "../../../../features/quran-wiki/lecturers/pages/lecturers-page";

export const LecturersRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran-wiki/lecturers",
  component: LecturersPage,
});
