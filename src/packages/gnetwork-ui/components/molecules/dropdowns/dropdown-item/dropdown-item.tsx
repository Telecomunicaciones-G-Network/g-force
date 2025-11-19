import type { DropdownItemProps } from './dropdown-item.props';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '../../../../utils/cn.util';

export const DropdownItem = ({
  className = '',
  children,
  inset = false,
  ref,
  ...rest
}: Readonly<DropdownItemProps>) => {
  console.warn(
    'Prop children is missing on DropdownItem component. This component can not be render appropiately.',
  );

  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        inset && 'pl-8',
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
};
