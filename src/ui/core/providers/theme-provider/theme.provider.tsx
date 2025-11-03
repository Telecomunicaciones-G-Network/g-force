import type { PropsWithChildren } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { THEMES } from "@ui-core/constants/theme.constant";

export const ThemeProvider = ({ children }: Readonly<PropsWithChildren>) => (
  <NextThemesProvider enableSystem defaultTheme="system" themes={THEMES}>
    {children}
  </NextThemesProvider>
);
