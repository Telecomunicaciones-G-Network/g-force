import type { ButtonIconProps } from "./button-icon.props";

import { cn } from "../../../../../../utils/cn.util";

import styles from "./button-icon.module.css";

export const ButtonIcon = ({
  children,
  className = "",
  onClick,
  size,
}: Readonly<ButtonIconProps>) => (
  <button
    type="button"
    className={cn(styles.base, "items-center justify-center", className)}
    style={{
      height: size,
      width: size,
    }}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    }}
  >
    {children}
  </button>
);
