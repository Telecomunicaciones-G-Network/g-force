'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

/**
 * On conversation created hook
 *
 * This hook listens to the on `conversation_created` socket event:
 * When a new conversation is started with the contact. For now, this event will never be received live because only
 * chats with existing conversations appear, but in the future, there should be a "historical" view with all contacts
 * who have ever written, and it will be possible to receive this event live.
 * - No actions at the moment.
 * [Contact event]
 */
export const useOnConversationCreated = () => {
  onSocketEvent<unknown>(
    socketEventsDictionary.CONVERSATION_CREATED,
    (data: unknown) => {
      const parseResponse = JSON.parse(data as unknown as string);

      console.log(parseResponse);
    },
  );
};
