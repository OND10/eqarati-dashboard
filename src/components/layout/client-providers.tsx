'use client';

import { ReactNode, useEffect, useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { router, queryClient } from '@/app/routes/main';
import KBar from '@/components/kbar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function ClientProviders({
  children,
  defaultSidebarOpen
}: {
  children: ReactNode;
  defaultSidebarOpen?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
