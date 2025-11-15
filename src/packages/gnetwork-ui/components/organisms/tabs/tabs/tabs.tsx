'use client';

import type { TabsProps } from './tabs.props';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../../../utils/cn.util';

import styles from './tabs.module.css';

const TabsContainer = TabsPrimitive.Root;

export const Tabs = ({
  className = '',
  children,
  defaultValue,
  ref,
  ...rest
}: Readonly<TabsProps>) => {
  if (!defaultValue) {
    console.warn(
      'Prop defaultValue is missing on Tabs component. This component can not be render appropiately.',
    );
  }

  return (
    <TabsContainer
      className={cn(styles.base, className)}
      defaultValue={defaultValue}
      ref={ref}
      {...rest}
    >
      {children}
    </TabsContainer>
  );
};
