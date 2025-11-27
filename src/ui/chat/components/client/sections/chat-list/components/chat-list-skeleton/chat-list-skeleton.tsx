import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ContactCardSkeleton } from '@ui-chat/components/client/sections/chat-list/components/contact-card-skeleton';

import styles from './chat-list-skeleton.module.css';

export const ChatListSkeleton = () => (
  <section
    className={cn(
      styles.base,
      'pb-2 pt-4 px-0 tablet:pt-6 lg:pt-8 w-full lg:min-w-[385px] lg:w-[385px]',
    )}
  >
    <div
      className={cn(
        styles.base__header,
        'pt-0 pb-4 px-4 tablet:pb-6 tablet:px-8 lg:pb-2',
      )}
    >
      <Skeleton />
      <Skeleton className="w-[42px]" />
    </div>
    <div
      className={cn(
        styles.base__body,
        'pb-4 px-4 tablet:pb-[27px] tablet:px-8 lg:p-0',
      )}
    >
      {Array.from({ length: 10 }, () => crypto.randomUUID()).map((id) => (
        <ContactCardSkeleton key={id} />
      ))}
    </div>
  </section>
);
