//  IMPROVE: Colocar este componente como contact list para tener coherencia con los datos

'use client';

import type { GetContactsViewModel } from '@module-chat/infrastructure/viewmodels';

import { use } from 'react';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatListBody } from './components/chat-list-body';
import { ChatListHeader } from './components/chat-list-header';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatList } from './chat-list.hook';

import styles from './chat-list.module.css';

interface ChatListProps {
  chatContactsResponsePromise: Promise<GetContactsViewModel>;
}

export const ChatList = ({
  chatContactsResponsePromise,
}: Readonly<ChatListProps>) => {
  const { contacts = [] } = use(chatContactsResponsePromise);
  const { chatMode, isDesktop } = useChatList();

  return (
    <>
      {(chatMode === ChatModes.LIST || isDesktop) && (
        <section
          className={cn(
            styles.base,
            'pb-2 pt-4 px-0 tablet:pt-6 lg:pt-8 w-full lg:min-w-[385px] lg:w-[385px]',
          )}
        >
          {contacts?.length > 0 && <ChatListHeader hideFilterButton />}
          <ChatListBody contacts={contacts} />
        </section>
      )}
    </>
  );
};
