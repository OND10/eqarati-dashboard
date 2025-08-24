import { createRoute } from '@tanstack/react-router';
import { AuthRoute } from '../main';
import Dashboard from '@/app/dashboard/page';

// Dashboard parent route
export const DashboardRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: 'dashboard'
});

// Child: /dashboard/overview
export const OverviewRoute = createRoute({
  getParentRoute: () => DashboardRoute,
  path: 'overview',
  //   component: () => import("@/app/dashboard/page").then((m) => m.default),
  component: Dashboard
});

// Child: /dashboard/category
export const CategoryRoute = createRoute({
  getParentRoute: () => DashboardRoute,
  path: 'category',
  component: () =>
    import('@/app/dashboard/category/page').then((m) => m.default)
});

// You can continue adding product, kanban, profile, etc.
