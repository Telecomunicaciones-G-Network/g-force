'use client';

import { MdOutlineMap } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useSidebarBranch } from './sidebar-branch.hook';

import styles from './sidebar-branch.module.css';

export const SidebarBranch = () => {
  const { isSidebarCollapsed } = useSidebarBranch();

  return (
    <div
      className={cn(
        styles.base,
        isSidebarCollapsed ? 'justify-center' : 'justify-start',
      )}
    >
      <Tooltip
        disabled={!isSidebarCollapsed}
        triggerComponent={<MdOutlineMap className="size-6" />}
      >
        Sede Montesano
      </Tooltip>
      {!isSidebarCollapsed && (
        <div className={styles.base__content}>
          <Text
            as="h6"
            className="text-chromatic-inverted"
            level="small"
            scheme="paragraph"
          >
            Sede
          </Text>
          <Text
            as="span"
            className="text-chromatic-inverted"
            level="small"
            scheme="label"
          >
            Montesano
          </Text>
        </div>
      )}
    </div>
  );
};
