'use client';

import type { SwitchProps } from './switch.props';

import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '../../../../utils/cn.util';

import styles from './switch.module.css';

export const Switch = ({
  className = '',
  ref,
  ...rest
}: Readonly<SwitchProps>) => (
  <SwitchPrimitives.Root
    className={cn(
      styles.base,
      'bg-neutral-100 border border-solid border-neutral-400 h-8 px-2 peer rounded-full shrink-0 w-11 transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-chromatic-inverted data-[state=unchecked]:bg-input',
      className,
    )}
    ref={ref}
    {...rest}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        styles.base__thumb,
        'bg-neutral-400 h-[14px] w-[14px] rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:bg-chromatic data-[state=unchecked]:bg-neutral-400 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
);
