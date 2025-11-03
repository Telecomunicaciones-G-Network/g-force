// Globals Types

/* CSS */
declare module "*.css";
declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

/* Eslint */
declare module "eslint-plugin-react";

// Next Themes
export type ThemeType = "light" | "dark" | "system";

declare module "next-themes" {
  interface ThemeProviderProps {
    defaultTheme?: ThemeType;
    themes?: ThemeType[];
  }
}

declare module "*.svg?url" {
  const content: {
    src: string;
    height: number;
    width: number;
    blurWidth: number;
    blurHeight: number;
  };
  export default content;
}
