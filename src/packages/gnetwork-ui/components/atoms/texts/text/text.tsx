import type { ElementType } from "react";
import type { TextComponent, TextProps } from "./text.props";

import { getTextClassName } from "./text.style";

/**
 * Text component.
 *
 * @param asChild - The optional flag; if true, the text will be rendered as a child element.
 * @param align - The optional text alignment, defined in TextAlign.
 * @param children - The children.
 * @param className - The optional extra CSS class names to apply to the text.
 * @param customColor - The optional custom CSS color value to override text color.
 * @param emphasis - Optional flag; if true, applies lighter font with gray color.
 * @param italic - Optional flag; if true, renders text in italic style.
 * @param level - The optional text level (e.g., h1, h2, p), defined in TextLevel.
 * @param ref - The ref.
 * @param scheme - The optional text scheme (e.g., heading, label, paragraph), defined in TextScheme.
 * @param size - The optional text size, defined in TextSize.
 * @param underline - Optional flag; if true, underlines the text.
 * @param weight - The optional font weight, defined in TextWeight.
 * @param ...rest - The rest props.
 */
export const Text: TextComponent = <C extends ElementType = "p">({
  align,
  as,
  children,
  className,
  customColor,
  emphasis,
  italic,
  level,
  ref,
  scheme,
  size,
  underline,
  weight,
  ...rest
}: Readonly<TextProps<C>>) => {
  const Component = (as || "p") as ElementType;

  const classes = getTextClassName({
    align,
    className,
    emphasis,
    italic,
    level,
    scheme,
    size,
    underline,
    weight,
  });

  if (!children) {
    console.warn(
      "Prop children is missing on Text component. This component can not be render appropiately.",
    );
  }

  return (
    <Component
      ref={ref}
      className={classes}
      style={{
        color: customColor,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
