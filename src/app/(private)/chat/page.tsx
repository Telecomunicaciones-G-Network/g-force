import type { Metadata } from "next";

import { ChatConversation } from "@ui-chat/components/server/sections/chat-conversation";
import { ChatList } from "@ui-chat/components/server/sections/chat-list";

import { cn } from "@gnetwork-ui/utils/cn.util";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "G-Force - Chat",
  description: "G-Force Chat",
};

export default function ChatPage() {
  return (
    <div className={cn(styles.base, "divide-x divide-neutral-200")}>
      <ChatList />
      <ChatConversation />
    </div>
  );
}
