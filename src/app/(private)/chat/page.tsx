import { ChatList } from "@ui-chat/components/server/chat-list";

import styles from "./page.module.css";

/**
 * Chat page component.
 */
export default function ChatPage() {
  return (
    <div className={styles.base}>
      <ChatList />
    </div>
  );
}
