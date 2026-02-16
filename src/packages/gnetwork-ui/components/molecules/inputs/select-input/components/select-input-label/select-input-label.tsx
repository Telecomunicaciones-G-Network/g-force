'use client';

import type { SelectInputLabelProps } from './select-input-label.props';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '../../../../../../utils/cn.util';

export const SelectInputLabel = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<SelectInputLabelProps>) => (
  <SelectPrimitive.Label
    className={cn('font-semibold px-2 py-1.5 text-sm', className)}
    ref={ref}
    {...rest}
  >
    {children}
  </SelectPrimitive.Label>
);
