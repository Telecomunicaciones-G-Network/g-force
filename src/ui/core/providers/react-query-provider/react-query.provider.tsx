// DONE:

'use client';

import type { PropsWithChildren } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@ui-core/components/client/tools/react-query-devtools';

const queryClient = new QueryClient();

export const ReactQueryProvider = ({
  children,
}: Readonly<PropsWithChildren>) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools />
  </QueryClientProvider>
);
