import type { Ref } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export type DropdownTitleProps =
  DropdownMenuPrimitive.DropdownMenuLabelProps & {
    inset?: boolean;
    ref?: Ref<HTMLDivElement>;
  };
