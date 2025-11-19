import type { Ref } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export interface DropdownSeparatorProps
  extends DropdownMenuPrimitive.DropdownMenuSeparatorProps {
  ref?: Ref<HTMLDivElement>;
}
