import { ReactChild } from '../../../../types';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export interface DropdownProps extends DropdownMenuPrimitive.DropdownMenuProps {
  sideOffset?: number;
  triggerComponent: ReactChild;
}
