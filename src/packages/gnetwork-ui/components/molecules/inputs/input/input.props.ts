import type { VariantProps } from "class-variance-authority";
import type { ReactChild, ReactInput } from "../../../../types";
import type { inputVariants } from "./input.style";

export interface InputVariants extends VariantProps<typeof inputVariants> {
  className?: string;
  error?: boolean;
  fullWidth?: boolean;
}

export interface InputProps extends ReactInput, InputVariants {
  containerClassName?: string;
  label?: string;
  leftIcon?: ReactChild;
  message?: string;
  rightIcon?: ReactChild;
}
