'use client';

import type { ChatContainerProps } from './chat-container.props';

import { Suspense } from 'react';

import { ErrorBoundary } from '@gnetwork-ui/components/atoms/logics/error-boundary';

import { ChatEmpty } from '@ui-chat/components/client/blocks/chat-empty';
import { ChatConversation } from '@ui-chat/components/client/sections/chat-conversation';
import { ChatDetails } from '@ui-chat/components/client/sections/chat-details';
import { ChatListSkeleton } from '@ui-chat/components/client/sections/contacts-section/components/chat-list-skeleton';
import { ContactsSection } from '@ui-chat/components/client/sections/contacts-section';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatContainer } from './chat-container.hook';

/**
 * @function ChatContainer
 *
 * @description This component is used to render the chat container.
 *
 * @property {Promise<GetContactsResponse>} chatContactsResponsePromise - The promise for the chat contacts response.
 *
 * TODO: Check the error boundary and suspense for the chat container.
 * TODO: Avoid to transfer the promise by props. Find out other way to do it.
 */
export const ChatContainer = ({
  chatContactsResponsePromise,
}: Readonly<ChatContainerProps>) => {
  const { activeContact, chatMode, isDesktop } = useChatContainer();

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<ChatListSkeleton />}>
          <ContactsSection
            chatContactsResponsePromise={chatContactsResponsePromise}
          />
        </Suspense>
      </ErrorBoundary>
      {activeContact && (chatMode === ChatModes.CHAT || isDesktop) && (
        <ChatConversation />
      )}
      <ChatDetails />
      <ChatEmpty />
    </>
  );
};
