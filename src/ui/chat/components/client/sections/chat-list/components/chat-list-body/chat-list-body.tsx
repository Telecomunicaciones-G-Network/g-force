// PENDING:

'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';
import type { ChatListBodyProps } from './chat-list-body.props';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatCard } from '@ui-chat/components/client/cards/chat-card';
import { ChatListEmpty } from '../chat-list-empty';

import { useChatListBody } from './chat-list-body.hook';

import styles from './chat-list-body.module.css';

export const ChatListBody = ({ chats = [] }: Readonly<ChatListBodyProps>) => {
  const { activeChat, changeActiveChat } = useChatListBody();

  return (
    <div
      className={cn(
        styles.base,
        'pb-4 px-4 tablet:pb-[27px] tablet:px-8 lg:p-0',
      )}
    >
      {chats?.length > 0 ? (
        chats.map((chat: ContactValues) => (
          <ChatCard
            isActive={activeChat === chat?.id}
            key={chat?.id}
            lastMessage={chat?.latestMessage?.message}
            lastMessageTime={chat?.latestMessage?.createdAt}
            onClick={() => changeActiveChat(chat?.id)}
            username={chat?.name}
          />
        ))
      ) : (
        <ChatListEmpty />
      )}
    </div>
  );
};
