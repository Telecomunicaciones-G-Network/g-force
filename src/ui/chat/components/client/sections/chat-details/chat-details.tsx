// PENDING:

'use client';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatDetailTabs } from '@ui-chat/components/client/tabs/chat-detail-tabs';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatDetails } from './chat-details.hook';

import styles from './chat-details.module.css';

export const ChatDetails = () => {
  const { activeContact, chatMode, isDesktop } = useChatDetails();

  return (
    <>
      {(chatMode === ChatModes.DETAILS || isDesktop) &&
        activeContact !== null &&
        activeContact !== undefined && (
          <section
            className={cn(styles.base, 'w-full lg:min-w-[327px] lg:w-[327px]')}
          >
            <ChatDetailTabs />
          </section>
        )}
    </>
  );
};
