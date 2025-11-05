import type { InputProps } from "./input.props";

import { cn } from "../../../../utils/cn.util";

import { getInputClassNames } from "./input.style";

import styles from "./input.module.css";

/**
 * Input component.
 *
 * @param className - The class name.
 * @param containerClassName - The container class name.
 * @param error - The error.
 * @param fullWidth - The full width.
 * @param id - The id.
 * @param label - The label.
 * @param leftIcon - The left icon.
 * @param message - The message.
 * @param name - The name.
 * @param ref - The ref.
 * @param rightIcon - The right icon.
 * @param type - The type.
 * @param rest - The rest.
 */
export const Input = ({
  className = "",
  containerClassName = "",
  error = false,
  fullWidth,
  id,
  label = "",
  leftIcon,
  message = "",
  name,
  ref,
  rightIcon,
  type = "text",
  ...rest
}: Readonly<InputProps>) => {
  const classes = getInputClassNames({ className, error, fullWidth });

  if (!id || name) {
    console.warn(
      "Prop id or name is missing on Input component. This component can not be render appropiately.",
    );
  }

  return (
    <div className={cn(styles.base, containerClassName)}>
      {label && (
        <label
          className={cn(styles.base__label, "text-chromatic-inverted")}
          htmlFor={id || name}
        >
          {label}
        </label>
      )}
      <div className={cn(classes)}>
        {leftIcon && leftIcon}
        <input
          className={cn(
            styles.base__input,
            "font-medium text-base text-chromatic-inverted text-left placeholder:text-input-placeholder",
          )}
          ref={ref}
          type={type}
          {...rest}
        />
        {rightIcon && rightIcon}
      </div>
      {message && (
        <span
          className={cn(
            styles.base__message,
            "text-chromatic-inverted",
            error && "text-warning-200",
          )}
        >
          {message}
        </span>
      )}
    </div>
  );
};
