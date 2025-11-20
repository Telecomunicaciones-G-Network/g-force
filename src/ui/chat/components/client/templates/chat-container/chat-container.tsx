// TODO: Usar el context para pasar la promesa y no usar props drilling
// TODO: Debo agregar la validacion del socket de isConnected para deshabilitar y habilitar elementos del chat

'use client';

import type { ChatContainerProps } from './chat-container.props';

import { Suspense } from 'react';

import { ErrorBoundary } from '@gnetwork-ui/components/atoms/logics/error-boundary';

import { ChatEmpty } from '@ui-chat/components/client/blocks/chat-empty';
import { ChatConversation } from '@ui-chat/components/client/sections/chat-conversation';
import { ChatDetails } from '@ui-chat/components/client/sections/chat-details';
import { ChatList } from '@ui-chat/components/client/sections/chat-list';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatContainer } from './chat-container.hook';

export const ChatContainer = ({
  chatContactsResponsePromise,
}: Readonly<ChatContainerProps>) => {
  const { activeContact, chatMode, isDesktop } = useChatContainer();

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
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
