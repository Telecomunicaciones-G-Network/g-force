'use client';

import type { ChatContainerProps } from './chat-container.props';

import { Suspense } from 'react';

import { ErrorBoundary } from '@gnetwork-ui/components/atoms/logics/error-boundary';

import { ChatConversation } from '@ui-chat/components/client/sections/chat-conversation';
import { ChatEmpty } from '@ui-chat/components/client/blocks/chat-empty';
import { ChatDetails } from '@ui-chat/components/client/sections/chat-details';
import { ChatList } from '@ui-chat/components/client/sections/chat-list';
import { ChatListSkeleton } from '@ui-chat/components/client/sections/chat-list/components/chat-list-skeleton';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatContainer } from './chat-container.hook';

export const ChatContainer = ({
  chatContactsResponsePromise,
}: Readonly<ChatContainerProps>) => {
  const { activeContact, chatMode, isDesktop } = useChatContainer();

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<ChatListSkeleton />}>
          <ChatList chatContactsResponsePromise={chatContactsResponsePromise} />
        </Suspense>
      </ErrorBoundary>
      {(chatMode === ChatModes.CHAT || isDesktop) &&
        activeContact !== null &&
        activeContact !== undefined && <ChatConversation />}
      <ChatDetails />
      <ChatEmpty />
    </>
  );
};
