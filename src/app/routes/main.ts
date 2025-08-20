import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { SignInRoute } from "./no_auth/sign-in.route";
import { HomeRoute } from "./_authenticated/Home.route";
import RootRouteLayout, {
  AuthLayout,
  NoAuthLayout,
} from "../../common/components/layout/Layouts";
import Error404Page from "../../features/errors/404/404";
import Error505Page from "../../features/errors/500/500";
import { RecitersRoute } from "./_authenticated/quran/reciters.route";
import { QuranReadingRoute } from "./_authenticated/quran/quran-reading.route";
import { QueryClient } from "@tanstack/react-query";
import { ChangPasswordRoute } from "./_authenticated/common-services/change-password.route";
import { HizbSegmentationRoute } from "./_authenticated/quran/hizb-segmentation.route";
import { FaharsRoute } from "./_authenticated/quran/Fahras.route";
import { PermissionsContext } from "../Providers/permissions/context";
import { SymbolsRoute } from "./_authenticated/symbols.route";
import middleware from "./middleware";
import { CreateUserRoute } from "./_authenticated/common-services/create-user.route";
import { UsersRoute } from "./_authenticated/common-services/users.route";
import { CreateReciterRoute } from "./_authenticated/quran/create-reciter.route";
import { UpdateReciterRoute } from "./_authenticated/quran/edit-reciter.route";
import { ProfileRoute } from "./_authenticated/common-services/profile.route";
import { UpdateUserRoute } from "./_authenticated/common-services/edit-user.route";
import { ReciterOverviewRoute } from "./_authenticated/quran/reciter-overview.route";
import { ReciterAudioSegmentationRoute } from "./_authenticated/quran/reciter-audio-segmentation.route";
import { GroupsRoute } from "./_authenticated/common-services/groups.route";
import { CreateGroupRoute } from "./_authenticated/common-services/create-group.route";
import { UpdateGroupRoute } from "./_authenticated/common-services/edit-group.route";
import { PermissionRoute } from "./_authenticated/common-services/permissions.route";
import { UpdatePermissionRoute } from "./_authenticated/common-services/edit-permission.route";
import { CreatePermissionRoute } from "./_authenticated/common-services/create-permission.route";
import { CreateRecitationRoute } from "./_authenticated/quran/create-recitation.route";
import { SystemVariablesRoute } from "./_authenticated/common-services/system-variables.route";
import { CreateSystemVariableRoute } from "./_authenticated/common-services/create-system-variable.route";
import { RecitationsRoute } from "./_authenticated/quran/recitations.route";
import { UpdateSystemVariableRoute } from "./_authenticated/common-services/edit-system-variable.route";
import { MyFormsRoute } from "./_authenticated/review-app/my-forms.route";
import { FormsForReviewRoute } from "./_authenticated/review-app/forms-for-review.route";
import { UpdateRecitationRoute } from "./_authenticated/quran/edit-recitation.route";
import { store } from "../../services/Redux/store";
import forbiddenRoute from "./error.route";
import { AllFormsRoute } from "./_authenticated/review-app/all-forms.route";
import { PathsRoute } from "./_authenticated/review-app/paths.route";
import { NodesRoute } from "./_authenticated/review-app/nodes.route";
import { InitializationRoute } from "./_authenticated/common-services/Initialization.route";
import { LecturersRoute } from "./_authenticated/quran-wiki/lecturers.route";
import { CreateLecturerRoute } from "./_authenticated/quran-wiki/create-lecturer.route";
import { EditLecturerRoute } from "./_authenticated/quran-wiki/edit-lecturer.route";
import { LecturerRoute } from "./_authenticated/quran-wiki/lecturer-overview.route";
import { EditPersonalInfoRoute } from "./_authenticated/quran-wiki/edit-personal-info.route";

export const queryClient = new QueryClient();

/**
 * context for different wrappers must be inserted in AppRootRoute and router declaration
 */

//Wrapper for all routes used as a middleware to controller traffic
export const AppRootRoute = createRootRouteWithContext<{
  queryClient: QueryClient;
  authProvider: typeof PermissionsContext;
  reduxProvider: typeof store;
}>()({
  component: RootRouteLayout,
  beforeLoad: async (args) => await middleware({ args }),
  errorComponent: (err) => Error505Page(err),
  notFoundComponent: Error404Page,
  // onCatch(error) {
  //   console.error("APP ROOT ROUTE CATCH "+error.message)
  // },
});

// Authenticated users routes
export const AuthRoute = createRoute({
  getParentRoute: () => AppRootRoute,
  id: "auth",
  component: AuthLayout,
  errorComponent: (err) => Error505Page(err),
  notFoundComponent: Error404Page,
});

// Non Authenticated users routes

export const NoAuthRoute = createRoute({
  getParentRoute: () => AppRootRoute,
  id: "noAuth",
  component: NoAuthLayout,
  errorComponent: (err) => Error505Page(err),
  notFoundComponent: Error404Page,
});

// Route Tree every root route and it's child is inserted here

const routerTree = AppRootRoute.addChildren([
  AuthRoute.addChildren([
    forbiddenRoute,
    HomeRoute,
    FaharsRoute,
    RecitersRoute,
    QuranReadingRoute,
    ChangPasswordRoute,
    CreateUserRoute,
    HizbSegmentationRoute,
    UsersRoute,
    SymbolsRoute,
    CreateRecitationRoute,
    CreateReciterRoute,
    UpdateReciterRoute,
    ProfileRoute,
    UpdateUserRoute,
    ReciterOverviewRoute,
    ReciterAudioSegmentationRoute,
    GroupsRoute,
    CreateGroupRoute,
    UpdateGroupRoute,
    PermissionRoute,
    UpdatePermissionRoute,
    CreatePermissionRoute,
    SystemVariablesRoute,
    CreateSystemVariableRoute,
    RecitationsRoute,
    UpdateSystemVariableRoute,
    MyFormsRoute,
    FormsForReviewRoute,
    UpdateRecitationRoute,
    AllFormsRoute,
    PathsRoute,
    NodesRoute,
    InitializationRoute,
    LecturersRoute,
    CreateLecturerRoute,
    EditLecturerRoute,
    LecturerRoute,
    EditPersonalInfoRoute
  ]),
  NoAuthRoute.addChildren([SignInRoute]),
]);

export const router = createRouter({
  routeTree: routerTree,
  defaultPreload: false,
  // defaultPreloadDelay:1000,
  scrollRestoration: true,
  context: {
    queryClient,
    authProvider: PermissionsContext,
    reduxProvider: store,
  },
});

// console.log(allRoutePaths)

// Helps TS to acknowledge our Route Tree as a valid routing type
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// To get all available routes to enforce TypeSafe
// needed to loop over the Router Tree to get every path possibles
type Route = { path: string; children?: Route[] };

export const extractRoutePaths = (
  routes: Route[],
  parentPath = ""
): string[] => {
  return routes.flatMap((route) => {
    const fullPath = `${parentPath}/${route.path}`.replace(/\/+/g, "/");
    const childPaths = route.children
      ? extractRoutePaths(route.children, fullPath)
      : [];

    return [fullPath, ...childPaths];
  });
};

export const allRoutePaths = extractRoutePaths(router.flatRoutes).filter(
  (path) => path != "/" && path != "/forbidden" && path != "/signIn"
);
// console.log(allRoutePaths)
