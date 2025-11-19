import type { DropdownSeparatorProps } from './dropdown-separator.props';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '../../../../utils/cn.util';

export const DropdownSeparator = ({
  className = '',
  ref,
  ...rest
}: Readonly<DropdownSeparatorProps>) => (
  <DropdownMenuPrimitive.Separator
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    ref={ref}
    {...rest}
  />
);
