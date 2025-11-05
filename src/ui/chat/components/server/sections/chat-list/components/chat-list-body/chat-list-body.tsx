"use client";

import type { Chat } from "@ui-chat/interfaces";

import { ChatCard } from "@ui-chat/components/client/cards/chat-card";
import { ChatListEmpty } from "../chat-list-empty";

import { chats } from "@ui-chat/iterators/chats.iterator";

import { useChatListBody } from "./chat-list-body.hook";

import styles from "./chat-list-body.module.css";

export const ChatListBody = () => {
  const { activeChat, changeActiveChat } = useChatListBody();

  return (
    <div className={styles.base}>
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
