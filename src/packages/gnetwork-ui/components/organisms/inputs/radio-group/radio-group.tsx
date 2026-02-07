'use client';

import type { RadioGroupProps } from './radio-group.props';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '../../../../utils/cn.util';

export const RadioGroup = ({
  className = '',
  ref,
  ...rest
}: Readonly<RadioGroupProps>) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn('grid gap-2', className)}
      {...rest}
    />
  );
};
