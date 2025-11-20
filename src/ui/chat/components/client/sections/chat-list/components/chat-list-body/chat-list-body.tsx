// PENDING:
// IMPROVE: Debo renombrar este componente como contact list body para tener coherencia con los datos

'use client';

import type { GetContactsResponseContact } from '@module-chat/domain/interfaces';
import type { ChatListBodyProps } from './chat-list-body.props';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatCard } from '@ui-chat/components/client/cards/chat-card';
import { ChatListEmpty } from '../chat-list-empty';

import { useChatListBody } from './chat-list-body.hook';

import styles from './chat-list-body.module.css';

export const ChatListBody = ({
  contacts = [],
}: Readonly<ChatListBodyProps>) => {
  const { activeChat, changeActiveChat } = useChatListBody();

  return (
    <div
      className={cn(
        styles.base,
        'pb-4 px-4 tablet:pb-[27px] tablet:px-8 lg:p-0',
      )}
    >
      {contacts?.length > 0 ? (
        contacts.map((contact: GetContactsResponseContact) => (
          <ChatCard
            contactId={contact?.id}
            isActive={activeChat === contact?.id}
            key={contact?.id}
            lastMessage={contact?.latestMessage?.text}
            lastMessageTime={contact?.latestMessage?.createdAt}
            onClick={() => changeActiveChat(contact?.id)}
            username={contact?.name}
          />
        ))
      ) : (
        <ChatListEmpty />
      )}
    </div>
  );
};
