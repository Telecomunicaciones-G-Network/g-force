import type { ThemeProviderProps } from "next-themes";

/**
 * Themes constant.
 *
 * @param themes - The themes.
 */
export const THEMES: ThemeProviderProps["themes"] = ["dark", "light"] as const;
