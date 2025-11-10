'use client';

import { ChatListBody } from './components/chat-list-body';
import { ChatListHeader } from './components/chat-list-header';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatList } from './chat-list.hook';

import styles from './chat-list.module.css';

export const ChatList = () => {
  const { chatMode, isDesktop } = useChatList();

  return (
    <>
      {(chatMode === ChatModes.LIST || isDesktop) && (
        <section className={styles.base}>
          <ChatListHeader />
          <ChatListBody />
        </section>
      )}
    </>
  );
};
