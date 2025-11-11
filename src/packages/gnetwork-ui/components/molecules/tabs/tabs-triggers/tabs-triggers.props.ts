import type { ReactDiv } from '../../../../types';

import * as TabsPrimitive from '@radix-ui/react-tabs';

export type TabsTriggersProps = TabsPrimitive.TabsListProps &
  Omit<ReactDiv, 'children' | 'dir'>;
