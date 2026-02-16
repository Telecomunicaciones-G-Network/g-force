'use client';

import { useCallback, useState } from 'react';

interface UseTabsProps {
  defaultValue?: string;
}

export const useTabs = ({ defaultValue }: Readonly<UseTabsProps>) => {
  const [activeTabValue, setActiveTabValue] = useState<string | undefined>(
    defaultValue,
  );

  const changeActiveTab = useCallback(
    (tabValue: string) => setActiveTabValue(tabValue),
    [],
  );

  const isActiveTab = useCallback(
    (tabValue: string): boolean => activeTabValue === tabValue,
    [activeTabValue],
  );

  return {
    activeTabValue,
    changeActiveTab,
    isActiveTab,
  };
};
