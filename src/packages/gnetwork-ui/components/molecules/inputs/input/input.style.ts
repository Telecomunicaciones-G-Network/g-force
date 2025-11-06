import type { InputVariants } from "./input.props";

import { cva } from "class-variance-authority";

import { cn } from "../../../../utils/cn.util";

import { inputError } from "./variants/input-error.variant";
import { inputFullWidth } from "./variants/input-fullwidth.variant";
import { inputIsStatic } from "./variants/input-static.variant";

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
      isStatic: inputIsStatic,
    },
    compoundVariants: [
      {
        error: false,
        isStatic: false,
        class:
          "focus-within:border focus-within:border-solid focus-within:border-neutral-50 focus-within:shadow-[0_0_0_2.5px_rgba(255,255,255,0.6)]",
      },
      {
        error: false,
        isStatic: true,
        class: "",
      },
      {
        error: true,
        isStatic: false,
        class: "focus-within:shadow-[0_0_0_2.5px_rgba(224,159,50,0.6)]",
      },
      {
        error: true,
        isStatic: true,
        class: "",
      },
    ],
    defaultVariants: {
      error: false,
      fullWidth: false,
      isStatic: false,
    },
  },
);

export const getInputClassNames = ({
  className = "",
  ...configVariants
}: InputVariants): string => {
  return cn(inputVariants({ className, ...configVariants }));
};
