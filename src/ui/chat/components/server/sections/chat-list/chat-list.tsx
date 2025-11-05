import { ChatListBody } from "./components/chat-list-body";
import { ChatListHeader } from "./components/chat-list-header";

import styles from "./chat-list.module.css";

/**
 * Chat list component.
 */
export const ChatList = () => (
  <section className={styles.base}>
    <ChatListHeader />
    <ChatListBody />
  </section>
);
