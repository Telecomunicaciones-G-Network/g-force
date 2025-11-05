import type { PropsWithChildren } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { THEMES } from "@ui-core/constants/theme.constant";

/**
 * Theme provider component.
 *
 * @param children - The children.
 */
export const ThemeProvider = ({ children }: Readonly<PropsWithChildren>) => (
  <NextThemesProvider enableSystem defaultTheme="system" themes={THEMES}>
    {children}
  </NextThemesProvider>
);
