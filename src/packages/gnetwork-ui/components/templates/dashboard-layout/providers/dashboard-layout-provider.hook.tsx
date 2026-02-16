'use client';

import { useState } from 'react';

export const useDashboardLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return {
    collapsed,
    toggleCollapsed,
  };
};
