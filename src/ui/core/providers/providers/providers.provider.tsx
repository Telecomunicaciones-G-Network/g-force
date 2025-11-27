import type { PropsWithChildren } from 'react';

import { TooltipProvider } from '@gnetwork-ui/components/molecules/tooltips/tooltip/providers/tooltip.provider';

import { ReactQueryProvider } from '@ui-core/providers/react-query-provider';
import { ThemeProvider } from '@ui-core/providers/theme-provider';

export const Providers = ({ children }: Readonly<PropsWithChildren>) => (
  <ThemeProvider>
    <ReactQueryProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </ReactQueryProvider>
  </ThemeProvider>
);
