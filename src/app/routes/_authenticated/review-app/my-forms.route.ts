import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import {MyFormsPage} from '../../../../features/review-app/pages/my-forms-page';

export const MyFormsRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/review-app/my-forms",
  component: MyFormsPage,
});
