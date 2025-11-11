import type { Metadata } from 'next';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatEmpty } from '@ui-chat/components/client/blocks/chat-empty';
import { ChatConversation } from '@ui-chat/components/client/sections/chat-conversation';
import { ChatList } from '@ui-chat/components/client/sections/chat-list';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gforce - Chat',
  description: 'Gforce Chat',
};

export default function ChatPage() {
  return (
    <div className={cn(styles.base, 'divide-x divide-neutral-200')}>
      <ChatList />
      <ChatConversation />
      <ChatEmpty />
    </div>
  );
}
