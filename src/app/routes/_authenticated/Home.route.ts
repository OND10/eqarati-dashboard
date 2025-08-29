import { createRoute } from '@tanstack/react-router';
import { AuthRoute } from '../main';
import App from 'next/app';
import Dashboard from '@/app/dashboard/page';

export const HomeRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: '/',
  component: Dashboard
});
