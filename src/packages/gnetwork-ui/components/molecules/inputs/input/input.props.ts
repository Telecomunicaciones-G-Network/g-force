import type { VariantProps } from "class-variance-authority";
import type { ReactChild, ReactInput } from "../../../../types";

import type { inputVariants } from "./input.style";

/**
 * Input variants.
 *
 * @param className - The class name.
 * @param error - The error.
 * @param fullWidth - The full width.
 */
export interface InputVariants extends VariantProps<typeof inputVariants> {
  className?: string;
  error?: boolean;
  fullWidth?: boolean;
}

/**
 * Input props.
 *
 * @param containerClassName - The container class name.
 * @param label - The label.
 * @param leftIcon - The left icon.
 * @param message - The message.
 * @param rightIcon - The right icon.
 */
export interface InputProps extends ReactInput, InputVariants {
  containerClassName?: string;
  label?: string;
  leftIcon?: ReactChild;
  message?: string;
  rightIcon?: ReactChild;
}
