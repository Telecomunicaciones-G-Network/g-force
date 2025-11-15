import type { ReactDiv } from '../../../../types';

import * as TabsPrimitive from '@radix-ui/react-tabs';

export interface TabsProps
  extends TabsPrimitive.TabsProps,
    Omit<ReactDiv, 'children' | 'dir'> {
  defaultValue: string;
}
