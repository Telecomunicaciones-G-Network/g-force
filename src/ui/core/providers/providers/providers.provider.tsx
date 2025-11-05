import type { PropsWithChildren } from "react";

import { ThemeProvider } from "@ui-core/providers/theme-provider/theme.provider";

/**
 * Providers component.
 *
 * @param children - The children.
 */
export const Providers = ({ children }: Readonly<PropsWithChildren>) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
