'use client';

import type { TabProps } from './tab.props';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../../../utils/cn.util';

import styles from './tab.module.css';

export const Tab = ({
  className = '',
  children,
  ref,
  value,
  ...rest
}: Readonly<TabProps>) => {
  if (!children) {
    console.warn(
      'Prop children is missing on Tab component. This component can not be render appropiately.',
    );
  }

  if (!value) {
    console.warn(
      'Prop value is missing on Tab component. This component can not be render appropiately.',
    );
  }

  return (
    <TabsPrimitive.Trigger
      className={cn(
        styles.base,
        'items-center justify-center whitespace-nowrap disabled:pointer-events-none',
        className,
      )}
      ref={ref}
      value={value}
      {...rest}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
};
