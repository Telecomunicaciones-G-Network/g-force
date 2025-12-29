'use client';

import type { SelectInputItemProps } from './select-input-item.props';

import * as SelectPrimitive from '@radix-ui/react-select';
import { MdCheck } from 'react-icons/md';

import { cn } from '../../../../../../utils/cn.util';

import styles from './select-item.module.css';

export const SelectInputItem = ({
  className,
  children,
  ref,
  ...rest
}: Readonly<SelectInputItemProps>) => (
  <SelectPrimitive.Item
    className={cn(
      styles.base,
      'py-2 px-2 pl-8 rounded-sm text-sm transition-colors hover:bg-neutral-600 hover:text-chromatic! data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
      className,
    )}
    ref={ref}
    {...rest}
  >
    <span
      className={cn(
        styles.base__indicator,
        'h-4 items-center justify-center left-2 w-4',
      )}
    >
      <SelectPrimitive.ItemIndicator>
        <MdCheck className="fill-red-500 min-h-5 min-w-5 size-5" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);
