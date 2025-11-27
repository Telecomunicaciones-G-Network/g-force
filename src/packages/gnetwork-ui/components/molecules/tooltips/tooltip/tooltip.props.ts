import type { PropsWithChildren, Ref } from 'react';
import type { ReactChild } from '../../../../types';

export interface TooltipProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  ref?: Ref<HTMLDivElement> | undefined;
  sideOffset?: number;
  triggerAsChild?: boolean;
  triggerComponent: ReactChild;
}
