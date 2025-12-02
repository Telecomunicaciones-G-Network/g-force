import type { ReactChild } from '../../../../types';
import type { DropdownContainerProps } from './components/dropdown-container/dropdown-container.props';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export interface DropdownProps
  extends DropdownMenuPrimitive.DropdownMenuProps,
    Pick<
      DropdownContainerProps,
      'align' | 'alignOffset' | 'side' | 'sideOffset'
    > {
  contentClassName?: string;
  triggerComponent: ReactChild;
}
