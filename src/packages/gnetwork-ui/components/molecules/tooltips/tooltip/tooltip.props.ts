import type { PropsWithChildren, Ref } from 'react';
import type { ReactChild } from '../../../../types';
import type { TooltipSide } from './types';

export interface TooltipProps extends PropsWithChildren {
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  className?: string;
  disabled?: boolean;
  ref?: Ref<HTMLDivElement> | undefined;
  side?: TooltipSide;
  sideOffset?: number;
  triggerAsChild?: boolean;
  triggerComponent: ReactChild;
}
