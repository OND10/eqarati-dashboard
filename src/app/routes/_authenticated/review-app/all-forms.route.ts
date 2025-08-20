import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { AllFormsPage } from "../../../../features/review-app/pages/all-forms-page";

export const AllFormsRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/review-app/all-forms",
  component: AllFormsPage,
});
