import type { RefAttributes } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export interface DropdownContainerProps
  extends DropdownMenuPrimitive.DropdownMenuContentProps,
    RefAttributes<HTMLDivElement> {
  sideOffset?: number;
}
