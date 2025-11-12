'use client';

import type { Chat } from '@ui-chat/interfaces';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatCard } from '@ui-chat/components/client/cards/chat-card';
import { ChatListEmpty } from '../chat-list-empty';

import { chats } from '@ui-chat/iterators/chats.iterator';

import { useChatListBody } from './chat-list-body.hook';

import styles from './chat-list-body.module.css';

export const ChatListBody = () => {
  const { activeChat, changeActiveChat } = useChatListBody();

  return (
    <div
      className={cn(
        styles.base,
        'pb-4 px-4 tablet:pb-[27px] tablet:px-8 lg:p-0',
      )}
    >
      {chats?.length > 0 ? (
        chats.map((chat: Chat) => (
          <ChatCard
            key={chat?.id}
            isActive={activeChat === chat?.id}
            onClick={() => changeActiveChat(chat?.id)}
            {...chat}
          />
        ))
      ) : (
        <ChatListEmpty />
      )}
    </div>
  );
};
