import { useMemo } from 'react';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-conversation-body.module.css';

export const ChatConversationBodySkeleton = () => {
  const skeletons = useMemo(
    () =>
      Array.from({ length: 10 }, () => crypto.randomUUID()).map((id, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={id}
            className={cn(
              'flex flex-col gap-2 w-full',
              isEven ? 'items-start' : 'items-end',
            )}
          >
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="w-[60%]" />
          </div>
        );
      }),
    [],
  );

  return (
    <div
      className={cn(
        styles.base,
        'gap-6 px-4 py-6 tablet:gap-8 tablet:px-8 lg:gap-6 lg:p-6',
      )}
    >
      {skeletons}
    </div>
  );
};
