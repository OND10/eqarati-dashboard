import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { NodesPage } from "../../../../features/review-app/pages/nodes-page";

export const NodesRoute = createRoute({
    getParentRoute: () => AuthRoute,
    path: "/review-app/paths/$id/nodes",
    component: NodesPage,
});
