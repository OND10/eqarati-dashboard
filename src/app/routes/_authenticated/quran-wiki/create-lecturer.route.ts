import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import CreateLecturerPage from "../../../../features/quran-wiki/lecturers/pages/create-lecturer-page";

export const CreateLecturerRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran-wiki/create-lecturer",
  component: CreateLecturerPage,
});
