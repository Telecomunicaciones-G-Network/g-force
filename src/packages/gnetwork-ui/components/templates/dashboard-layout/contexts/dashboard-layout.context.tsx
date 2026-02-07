'use client';

import type { DashboardLayoutContextValue } from './dashboard-layout-context.props';

import { createContext } from 'react';

export const DashboardLayoutContext =
  createContext<DashboardLayoutContextValue>({
    collapsed: false,
    toggleCollapsed: () => {},
  });
