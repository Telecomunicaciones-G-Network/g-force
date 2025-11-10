import type { ElementType } from 'react';
import type { TextComponent, TextProps } from './text.props';

import { getTextClassName } from './text.style';

export const Text: TextComponent = <C extends ElementType = 'p'>({
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
  const Component = (as || 'p') as ElementType;

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
      'Prop children is missing on Text component. This component can not be render appropiately.',
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
