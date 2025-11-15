'use client';

import type { TabProps } from '../../../molecules/tabs/tab/tab.props';

import { Button } from '../../../molecules/buttons/button';
import { Tab } from '../../../molecules/tabs/tab/tab';

export const TabButton = ({
  className = '',
  children,
  ref,
  value,
  ...rest
}: Readonly<TabProps>) => {
  if (!children) {
    console.warn(
      'Prop children is missing on TabButton component. This component can not be render appropiately.',
    );
  }

  if (!value) {
    console.warn(
      'Prop value is missing on TabButton component. This component can not be render appropiately.',
    );
  }

  return (
    <Tab asChild className={className} value={value} ref={ref} {...rest}>
      <Button className="px-2" isStatic>
        {children}
      </Button>
    </Tab>
  );
};
