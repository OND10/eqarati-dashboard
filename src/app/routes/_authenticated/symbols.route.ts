import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../main";
import { SymbolsPage } from "../../../features/quran/pages/symbols-page";

export const SymbolsRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/symbols",
  component: SymbolsPage,
});
