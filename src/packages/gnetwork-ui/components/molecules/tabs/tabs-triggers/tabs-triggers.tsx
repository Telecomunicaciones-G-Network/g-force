import type { TabsTriggersProps } from './tabs-triggers.props';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../../../utils/cn.util';

import styles from './tabs-triggers.module.css';

export const TabsTriggers = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<TabsTriggersProps>) => {
  if (!children) {
    console.warn(
      'Prop children is missing on TabsTriggers component. This component can not be render appropiately.',
    );
  }

  return (
    <TabsPrimitive.List
      className={cn(
        styles.base,
        'h-fit items-center justify-center',
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </TabsPrimitive.List>
  );
};
