"use client";

import type { ButtonProps } from "./button.props";

import { Slot } from "@radix-ui/react-slot";

import { useButton } from "./button.hook";

import { getButtonClassNames } from "./button.style";

import styles from "./button.module.css";

/**
 * Button component.
 *
 * @param asChild - The optional flag; if true, the button will be rendered as a child element.
 * @param children - The children.
 * @param className - The optional extra CSS class names to apply to the button.
 * @param color - The optional button color variant, defined in ButtonColorType.
 * @param fullWidth - The optional flag; if true, button stretches to full width.
 * @param isStatic - The optional flag; if true, the button is rendered with static appearance and does not respond to interaction.
 * @param leftIcon - The optional icon to display on the left side of the button.
 * @param loading - The optional flag; if true, the button shows a loading state.
 * @param onClick - The onClick.
 * @param ref - The ref.
 * @param rightIcon - The optional icon to display on the right side of the button.
 * @param scheme - The optional button scheme (e.g., default, outline, link), defined in ButtonSchemeType.
 * @param size - The optional button size, defined in ButtonSizeType.
 * @param type - The HTML button type.
 * @param ...rest - The rest props.
 */
export const Button = ({
  asChild = false,
  children,
  className = "",
  color,
  fullWidth,
  isStatic,
  leftIcon,
  loading = false,
  onClick,
  ref,
  rightIcon,
  scheme,
  size,
  type = "button",
  ...rest
}: Readonly<ButtonProps>) => {
  const classes = getButtonClassNames({
    className,
    color,
    fullWidth,
    scheme,
    size,
    isStatic,
  });
  const Comp = asChild ? Slot : "button";
  const { handleClick } = useButton({ onClick });

  if (!children) {
    console.warn(
      "Prop children is missing on Button component. This component can not be render appropiately.",
    );
  }

  return (
    <Comp
      className={classes}
      onClick={handleClick}
      ref={ref}
      type={type}
      {...rest}
    >
      {loading && (
        <div className={styles.base__spinner_container}>
          <div
            className={`${styles.base__spinner} ${styles.base__spinner_wide}`}
          ></div>
        </div>
      )}
      {!loading && (
        <>
          {leftIcon && <Slot>{leftIcon}</Slot>}
          {children}
          {rightIcon && <Slot>{rightIcon}</Slot>}
        </>
      )}
    </Comp>
  );
};
