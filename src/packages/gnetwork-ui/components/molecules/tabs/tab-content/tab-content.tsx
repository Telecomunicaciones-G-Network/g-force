'use client';

import type { TabContentProps } from './tab-content.props';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../../../utils/cn.util';

import styles from './tab-content.module.css';

export const TabContent = ({
  className = '',
  children,
  ref,
  value,
  ...rest
}: Readonly<TabContentProps>) => {
  if (!children) {
    console.warn(
      'Prop children is missing on TabContent component. This component can not be render appropiately.',
    );
  }

  if (!value) {
    console.warn(
      'Prop value is missing on TabContent component. This component can not be render appropiately.',
    );
  }

  return (
    <TabsPrimitive.Content
      className={cn(styles.base, className)}
      ref={ref}
      value={value}
      {...rest}
    >
      {children}
    </TabsPrimitive.Content>
  );
};
