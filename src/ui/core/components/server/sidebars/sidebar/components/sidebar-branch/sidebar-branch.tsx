'use client';

import { MdOutlineMap } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useSidebarBranch } from './sidebar-branch.hook';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from './sidebar-branch.module.css';

export const SidebarBranch = () => {
  const { isSidebarCollapsed, headquarter, isLoading } = useSidebarBranch();

  return (
    <>
      {isLoading && (
        <div
          className={cn(
            styles.base,
            isSidebarCollapsed ? 'justify-center' : 'justify-start',
          )}
        >
          <div className={styles.base__content}>
            <Skeleton className="h-[43px] w-full" />
          </div>
        </div>
      )}
      {!isLoading && headquarter && (
        <div
          className={cn(
            styles.base,
            isSidebarCollapsed ? 'justify-center' : 'justify-start',
          )}
        >
          <Tooltip
            disabled={!isSidebarCollapsed}
            side="right"
            sideOffset={20}
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
      )}
    </>
  );
};
