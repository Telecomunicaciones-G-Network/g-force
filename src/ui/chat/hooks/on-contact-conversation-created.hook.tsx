'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

export const useOnContactConversationCreated = () => {
  onSocketEvent<unknown>(
    socketEventsDictionary.CONTACT_CONVERSATION_CREATED,
    (data: unknown) => {
      JSON.parse(data as unknown as string);

      // TODO: Implement the logic
    },
  );
};
