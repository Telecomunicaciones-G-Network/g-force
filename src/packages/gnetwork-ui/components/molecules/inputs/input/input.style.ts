import type { InputVariants } from "./input.props";

import { cva } from "class-variance-authority";

import { cn } from "../../../../utils/cn.util";

import { inputError } from "./variants/input-error.variant";
import { inputFullWidth } from "./variants/input-fullwidth.variant";

import styles from "./input.module.css";

/**
 * Input variants.
 *
 * @param error - The error.
 * @param fullWidth - The full width.
 */
export const inputVariants = cva(
  [
    styles.base__container,
    "gap-[6px] min-h-[40px] bg-input-background py-2 px-3",
  ],
  {
    variants: {
      error: inputError,
      fullWidth: inputFullWidth,
    },
    compoundVariants: [],
    defaultVariants: {
      fullWidth: false,
    },
  },
);

/**
 * Get input class names.
 *
 * @param className - The class name.
 * @param configVariants - The config variants.
 * @returns The input class names.
 */
export const getInputClassNames = ({
  className = "",
  ...configVariants
}: InputVariants): string => {
  return cn(inputVariants({ className, ...configVariants }));
};
