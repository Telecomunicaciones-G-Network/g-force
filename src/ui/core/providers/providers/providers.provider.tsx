// DONE:

import type { PropsWithChildren } from 'react';

import { ReactQueryProvider } from '@ui-core/providers/react-query-provider';
import { ThemeProvider } from '@ui-core/providers/theme-provider';

export const Providers = ({ children }: Readonly<PropsWithChildren>) => (
  <ThemeProvider>
    <ReactQueryProvider>{children}</ReactQueryProvider>
  </ThemeProvider>
);
