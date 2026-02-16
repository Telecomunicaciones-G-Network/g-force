import type { PopoverContentProps } from './popover-content.props';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '../../../../utils/cn.util';

export const PopoverContent = ({
  align = 'center',
  className = '',
  ref,
  sideOffset = 4,
  ...rest
}: Readonly<PopoverContentProps>) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    className={cn(
      'bg-chromatic p-4 rounded-md shadow-md w-72 z-[9999] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]',
      className,
    )}
    sideOffset={sideOffset}
    {...rest}
  />
);
