import type { DropdownContainerProps } from './dropdown-container.props';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '../../../../../../utils/cn.util';

import styles from './dropdown-container.module.css';

export const DropdownContainer = ({
  align = 'start',
  alignOffset = 0,
  className = '',
  children,
  ref,
  side = 'bottom',
  sideOffset = 4,
  ...rest
}: Readonly<DropdownContainerProps>) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      align="start"
      alignOffset={alignOffset}
      className={cn(
        styles.base,
        'bg-chromatic border border-solid border-neutral-200 drop-shadow-[0px_20px_20px_-5px_rgba(0,0,0,0.1)] gap-2.5 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 overflow-x-hidden overflow-y-auto p-2 rounded-lg text-foreground z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]',
        className,
      )}
      ref={ref}
      side={side}
      sideOffset={sideOffset}
      {...rest}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
);
