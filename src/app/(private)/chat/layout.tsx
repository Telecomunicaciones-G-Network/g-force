import type { PropsWithChildren } from 'react';

import { ChatBaseSocketEventsSubscriber } from '@ui-chat/components/client/subscribers/chat-base-socket-events-subscriber';

/**
 * @name ChatLayout
 *
 * @description This layout is used to wrap the chat pages.
 *
 * @property {ReactNode} children - The children components.
 */
export default function ChatLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <ChatBaseSocketEventsSubscriber />
      {children}
    </>
  );
}
