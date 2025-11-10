import type { ElementType, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { PolymorphicComponentPropsWithRef } from '../../../../types';
import type {
  TextAlign,
  TextLevel,
  TextScheme,
  TextSize,
  TextWeight,
} from './types';

import { textVariants } from './text.style';

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

export type TextProps<C extends ElementType = 'p'> =
  PolymorphicComponentPropsWithRef<C, TextVariants & { customColor?: string }>;

export type TextComponent = <C extends ElementType = 'p'>(
  props: TextProps<C>,
) => ReactElement | null;
