import type { Metadata } from 'next';

import { SocketProvider } from '@socketio/providers/socket.provider';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { getTokenAction } from '@ui-auth/actions/get-token.action';

import { socketConfig } from '@ui-core/config/socket.config';

import { ChatEmpty } from '@ui-chat/components/client/blocks/chat-empty';
import { ChatConversation } from '@ui-chat/components/client/sections/chat-conversation';
import { ChatDetails } from '@ui-chat/components/client/sections/chat-details';
import { ChatList } from '@ui-chat/components/client/sections/chat-list';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gforce - Chat',
  description: 'Gforce Chat',
};

export default async function ChatPage() {
  const token = await getTokenAction();

  return (
    <SocketProvider config={socketConfig} token={token}>
      <div className={cn(styles.base, 'divide-x divide-neutral-200')}>
        <ChatList />
        <ChatConversation />
        <ChatDetails />
        <ChatEmpty />
      </div>
    </SocketProvider>
  );
}
