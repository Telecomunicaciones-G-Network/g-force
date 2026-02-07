import type { Ref } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export type DropdownHeaderProps =
  DropdownMenuPrimitive.DropdownMenuLabelProps & {
    inset?: boolean;
    ref?: Ref<HTMLDivElement>;
  };
