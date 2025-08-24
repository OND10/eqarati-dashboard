'use client';

import { ReactNode, useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { queryClient, router } from '@/app/routes/main';
import KBar from '@/components/kbar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function ClientProvidersWrapper({
  children,
  defaultSidebarOpen
}: {
  children: ReactNode;
  defaultSidebarOpen?: boolean;
}) {
  const [mounted, setMounted] = useState(false);

  // ✅ Only mount client providers after hydration
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // ✅ Create a single QueryClient instance
  // const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <KBar>
          <SidebarProvider defaultOpen={defaultSidebarOpen}>
            {children}
          </SidebarProvider>
        </KBar>
      </RouterProvider>
    </QueryClientProvider>
  );
}
