import type { ButtonIconProps } from "./button-icon.props";

import { cn } from "../../../../../../utils/cn.util";

import styles from "./button-icon.module.css";

/**
 * ButtonIcon component.
 *
 * @remarks
 * Renders an icon button with customizable size, className, and click handler.
 *
 * @param props - The props for the ButtonIcon component.
 * @param props.children - The content of the button (icon).
 * @param props.className - Optional additional class name(s) for the button.
 * @param props.onClick - Optional click event handler.
 * @param props.size - Optional size (number or string) for the button's width and height.
 */
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
