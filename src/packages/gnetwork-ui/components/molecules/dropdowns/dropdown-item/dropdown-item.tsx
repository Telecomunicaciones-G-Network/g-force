'use client';

import type { DropdownItemProps } from './dropdown-item.props';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '../../../../utils/cn.util';

import styles from './dropdown-item.module.css';

export const DropdownItem = ({
  children,
  className = '',
  inset = false,
  onClick,
  ref,
  ...rest
}: Readonly<DropdownItemProps>) => {
  if (!children) {
    console.warn(
      'Prop children is missing on DropdownItem component. This component can not be render appropriately.',
    );
  }

  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        styles.base,
        'cursor-pointer flex font-normal gap-2 items-center p-2 rounded-lg text-neutral-500 text-xs transition-colors focus:bg-neutral-600 focus:text-chromatic focus:font-bold hover:bg-neutral-600 hover:text-chromatic data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        inset && 'pl-2',
        className,
      )}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
};
