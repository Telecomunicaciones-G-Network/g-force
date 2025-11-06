import { useTheme } from "next-themes";

import { useIsComponentMounted } from "@hookers/use-is-component-mounted.hook";
import { useSystemTheme } from "@hookers/use-system-theme.hook";

/**
 * Custom hook to manage login brand.
 */
export const useLoginBrand = () => {
  const { isComponentMounted } = useIsComponentMounted();
  const { systemTheme } = useSystemTheme();
  const { theme } = useTheme();

  return {
    theme: isComponentMounted
      ? theme === "system"
        ? systemTheme
        : theme
      : "light",
    isComponentMounted,
  };
};
