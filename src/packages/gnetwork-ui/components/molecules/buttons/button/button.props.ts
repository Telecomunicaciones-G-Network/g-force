import type { VariantProps } from "class-variance-authority";
import type { ReactButton, ReactChild } from "../../../../types";
import type {
  ButtonColorType,
  ButtonSchemeType,
  ButtonSizeType,
} from "./types";

import { buttonVariants } from "./button.style";

/**
 * Button variants props.
 *
 * @param className   - The optional extra CSS class names to apply to the button.
 * @param color       - The optional button color variant, defined in ButtonColorType.
 * @param fullWidth   - The optional flag; if true, button stretches to full width.
 * @param isStatic      - The optional flag; if true, the button is rendered with static appearance and does not respond to interaction.
 * @param scheme      - The optional button scheme (e.g., default, outline, link), defined in ButtonSchemeType.
 * @param size        - The optional button size, defined in ButtonSizeType.
 */
export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
  className?: string;
  color?: ButtonColorType;
  fullWidth?: boolean;
  isStatic?: boolean;
  scheme?: ButtonSchemeType;
  size?: ButtonSizeType;
}

/**
 * Button props.
 *
 * @param asChild    - The optional flag; if true, the button will be rendered as a child element.
 * @param leftIcon   - The optional icon to display on the left side of the button.
 * @param rightIcon  - The optional icon to display on the right side of the button.
 */
export interface ButtonProps
  extends Omit<ReactButton, "color">,
    ButtonVariants {
  asChild?: boolean;
  leftIcon?: ReactChild;
  loading?: boolean;
  rightIcon?: ReactChild;
}
