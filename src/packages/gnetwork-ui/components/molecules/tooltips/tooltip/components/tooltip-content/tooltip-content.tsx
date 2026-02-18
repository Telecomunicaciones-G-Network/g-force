import type { TooltipContentProps } from './tooltip-content.props';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '../../../../../../utils/cn.util';

import styles from './tooltip-content.module.css';

export const TooltipContent = ({
  className = '',
  sideOffset = 4,
  children,
  align,
  alignOffset,
  ref,
  ...rest
}: Readonly<TooltipContentProps>) => (
  <TooltipPrimitive.Content
    className={cn(
      styles.base,
      'bg-chromatic-inverted border-none font-semibold px-3 py-1.5 rounded-md text-sm text-chromatic shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]',
      className,
    )}
    alignOffset={alignOffset}
    align={align}
    ref={ref}
    sideOffset={sideOffset}
    {...rest}
  >
    {children}
  </TooltipPrimitive.Content>
);
