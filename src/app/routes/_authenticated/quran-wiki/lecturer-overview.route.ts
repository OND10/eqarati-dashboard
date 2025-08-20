import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { LecturerPage } from "../../../../features/quran-wiki/lecturers/pages/lecturer-overview-page";

export const LecturerRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran-wiki/lecturer-overview/$id",
  component: LecturerPage,
});
