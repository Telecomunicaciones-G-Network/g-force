"use client";

import { useEffect, useState } from "react";

/**
 * System theme type representing the color scheme preference.
 */
export type SystemTheme = "light" | "dark";

/**
 * Use system theme props.
 *
 * @param systemTheme - The system theme.
 */
export interface UseSystemTheme {
  systemTheme: SystemTheme;
}

/**
 * Custom hook to detect and monitor the system's preferred color scheme.
 *
 * @returns {UseSystemTheme} The system theme.
 */
export const useSystemTheme = (): UseSystemTheme => {
  const [systemTheme, setSystemTheme] = useState<SystemTheme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return {
    systemTheme,
  };
};
