import { cn } from "../../../../../utils/cn.util";

import styles from "../icon.module.css";

/**
 * Processes icon class names.
 *
 * @param className - The class name to process.
 * @param iconName - The name of the icon.
 * @returns The processed class name.
 */
export const processIconClassNames = (
  className: string = "",
  iconName: string = "",
): string => {
  if (!iconName || typeof iconName !== "string") {
    return cn(styles.base, "items-center justify-center", className);
  }

  const iconNameFragments = iconName.split("_");
  const isOutlined = iconNameFragments?.some(
    (iconNameFragment) => iconNameFragment.toLowerCase().trim() === "outlined",
  );

  return cn(
    styles.base,
    "items-center justify-center",
    isOutlined ? "*:stroke-foreground" : "*:fill-foreground",
    className,
  );
};
