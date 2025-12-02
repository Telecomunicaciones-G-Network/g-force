import type { Ref } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export interface DropdownItemProps
  extends DropdownMenuPrimitive.DropdownMenuItemProps {
  inset?: boolean;
  onClick?: VoidFunction;
  ref?: Ref<HTMLDivElement>;
}
