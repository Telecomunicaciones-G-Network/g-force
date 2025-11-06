import type { VariantProps } from "class-variance-authority";
import type { ReactButton, ReactChild } from "../../../../types";
import type {
  ButtonColorType,
  ButtonSchemeType,
  ButtonSizeType,
} from "./types";

import { buttonVariants } from "./button.style";

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
  className?: string;
  color?: ButtonColorType;
  fullWidth?: boolean;
  isStatic?: boolean;
  scheme?: ButtonSchemeType;
  size?: ButtonSizeType;
}

export interface ButtonProps
  extends Omit<ReactButton, "color">,
    ButtonVariants {
  asChild?: boolean;
  leftIcon?: ReactChild;
  loading?: boolean;
  rightIcon?: ReactChild;
}
