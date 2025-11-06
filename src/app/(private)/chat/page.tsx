import type { Metadata } from "next";

import { ChatList } from "@ui-chat/components/server/sections/chat-list";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "G-Force - Chat",
  description: "G-Force Chat",
};

export default function ChatPage() {
  return (
    <div className={styles.base}>
      <ChatList />
    </div>
  );
}
