import type { ElementType, ReactElement } from "react";
import type { VariantProps } from "class-variance-authority";
import type { PolymorphicComponentPropsWithRef } from "../../../../types";
import type {
  TextAlign,
  TextLevel,
  TextScheme,
  TextSize,
  TextWeight,
} from "./types";

import { textVariants } from "./text.style";

/**
 * Text variants props.
 *
 * @param align      - The optional text alignment, defined in TextAlign.
 * @param className  - Optional extra CSS class names to apply to the text.
 * @param emphasis   - Optional flag; if true, applies lighter font with gray color.
 * @param italic     - Optional flag; if true, renders text in italic style.
 * @param level      - The optional text level (e.g., h1, h2, p), defined in TextLevel.
 * @param scheme     - The optional text scheme (e.g., heading, label, paragraph), defined in TextScheme.
 * @param size       - The optional text size, defined in TextSize.
 * @param underline  - Optional flag; if true, underlines the text.
 * @param weight     - The optional font weight, defined in TextWeight.
 */
export interface TextVariants extends VariantProps<typeof textVariants> {
  align?: TextAlign;
  className?: string;
  emphasis?: boolean;
  italic?: boolean;
  level?: TextLevel;
  scheme?: TextScheme;
  size?: TextSize;
  underline?: boolean;
  weight?: TextWeight;
}

/**
 * Text props.
 *
 * @param asChild    - The optional flag; if true, the text will be rendered as a child element.
 * @param customColor - The optional custom CSS color value to override text color.
 */
export type TextProps<C extends ElementType = "p"> =
  PolymorphicComponentPropsWithRef<C, TextVariants & { customColor?: string }>;

/**
 * Text component type.
 *
 * @param props - The props for the Text component, including polymorphic and variant props.
 * @returns The Text component as a React element or null.
 */
export type TextComponent = <C extends ElementType = "p">(
  props: TextProps<C>,
) => ReactElement | null;
