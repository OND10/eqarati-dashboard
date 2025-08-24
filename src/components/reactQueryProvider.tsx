'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000, // 1 minute
      gcTime: 30 * 60 * 1000 // 10 minutes
    }
  }
});

const isDevelopment = process.env.NODE_ENV === 'development';

export default function ReactQueryProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {isDevelopment}
      {children}
    </QueryClientProvider>
  );
}
