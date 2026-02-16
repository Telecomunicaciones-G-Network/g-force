import type { Ref } from 'react';

import type * as PopoverPrimitive from '@radix-ui/react-popover';

export interface PopoverContentProps
  extends PopoverPrimitive.PopoverContentProps {
  ref?: Ref<HTMLDivElement> | undefined;
}
