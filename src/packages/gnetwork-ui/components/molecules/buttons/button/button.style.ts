import type { ButtonVariants } from './button.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../utils/cn.util';

import { buttonColors } from './variants/button-color.variant';
import { buttonFullWidth } from './variants/button-fullwidth.variant';
import { buttonSchemes } from './variants/button-scheme.variant';
import { buttonSizes } from './variants/button-size.variant';
import { buttonStatic } from './variants/button-static.variant';

import styles from './button.module.css';

export const buttonVariants = cva(
  [
    styles.base,
    'justify-center ring-offset-background rounded-lg text-left transition-colors focus-visible:outline-none [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0',
  ],
  {
    variants: {
      color: buttonColors,
      fullWidth: buttonFullWidth,
      scheme: buttonSchemes,
      size: buttonSizes,
      isStatic: buttonStatic,
    },
    compoundVariants: [
      {
        color: 'default',
        isStatic: false,
        class: 'hover:bg-button-background-hover',
      },
      {
        color: 'default',
        isStatic: true,
        class: '',
      },
      {
        color: 'default',
        scheme: 'outline',
        class:
          'bg-transparent border border-solid border-button-background text-button-text hover:bg-button-background hover:text-button-text hover:border hover:border-solid hover:border-button-border',
      },
      {
        color: 'gray',
        scheme: 'outline',
        class:
          'bg-transparent border border-solid border-gray text-gray hover:bg-gray hover:text-chromatic-inverted hover:border-none',
      },
      {
        color: 'red',
        isStatic: false,
        class: 'focus:bg-red-800 hover:bg-red-500',
      },
      {
        color: 'red',
        isStatic: true,
        class: '',
      },
      {
        color: 'red',
        scheme: 'outline',
        class:
          'bg-transparent text-red-700 border border-solid border-red-700 hover:border-none hover:bg-red-700 hover:text-white',
      },
    ],
    defaultVariants: {
      color: 'default',
      fullWidth: false,
      isStatic: false,
      scheme: 'default',
      size: 'default',
    },
  },
);

export const getButtonClassNames = ({
  className = '',
  ...configVariants
}: ButtonVariants): string => {
  return cn(buttonVariants({ className, ...configVariants }));
};
