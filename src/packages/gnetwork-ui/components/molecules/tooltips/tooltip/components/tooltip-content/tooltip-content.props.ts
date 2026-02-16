import type { Ref } from 'react';
import type { ReactChild } from '../../../../../../types';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export interface TooltipContentProps
  extends TooltipPrimitive.TooltipContentProps {
  children: ReactChild;
  className?: string;
  ref?: Ref<HTMLDivElement> | undefined;
  sideOffset?: number;
}
