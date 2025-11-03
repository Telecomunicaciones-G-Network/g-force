import type { InputVariants } from "./input.props";

import { cva } from "class-variance-authority";

import { cn } from "../../../../utils/cn.util";

import { inputError } from "./variants/input-error.variant";
import { inputFullWidth } from "./variants/input-fullwidth.variant";

import styles from "./input.module.css";

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

export const getInputClassNames = ({
  className = "",
  ...configVariants
}: InputVariants): string => {
  return cn(inputVariants({ className, ...configVariants }));
};
