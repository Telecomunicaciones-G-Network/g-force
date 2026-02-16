import type { DropdownHeaderProps } from './dropdown-header.props';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '../../../../utils/cn.util';

export const DropdownHeader = ({
  className = '',
  children,
  inset = false,
  ref,
  ...rest
}: Readonly<DropdownHeaderProps>) => (
  <DropdownMenuPrimitive.Label
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    )}
    ref={ref}
    {...rest}
  >
    {children}
  </DropdownMenuPrimitive.Label>
);
