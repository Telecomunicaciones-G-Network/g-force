'use client';

import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';

import { useDashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout/dashboard-layout.hook';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { Brand } from '@ui-core/components/client/vectors/brand';

import styles from './sidebar-header.module.css';

export const SidebarHeader = () => {
  const { collapsed, toggleCollapsed } = useDashboardLayout();

  return (
    <div
      className={cn(
        styles.base,
        collapsed ? 'flex-col gap-4' : 'flex-row gap-2',
      )}
    >
      <Brand className="size-[120px]" skeletonClassName="size-[120px]" />
      <button
        className="cursor-pointer"
        onClick={toggleCollapsed}
        type="button"
      >
        <Icon name="sidebar_collapse_left" rotate={collapsed ? 180 : 0} />
      </button>
    </div>
  );
};
