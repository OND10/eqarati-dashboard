import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { FormsForReviewPage } from "../../../../features/review-app/pages/forms-for-review-page";

export const FormsForReviewRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/review-app/forms-for-review",
  component: FormsForReviewPage,
});
