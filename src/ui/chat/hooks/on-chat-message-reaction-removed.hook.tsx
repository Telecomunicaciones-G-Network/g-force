'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

/**
 * @name useOnChatMessageReactionRemoved
 *
 * @description This hook listens to the `REACTION_REMOVED` socket event:
 * When a reaction emoji is removed from a message (incoming or outgoing). Contains the message ID.
 *
 * [Contact event]
 *
 * @returns void
 */
export const useOnChatMessageReactionRemoved = () => {
  onSocketEvent<unknown>(
    socketEventsDictionary.CHAT_MESSAGE_REACTION_REMOVED,
    (data: unknown) => {
      const parseResponse = JSON.parse(data as unknown as string);

      // TODO: Implement the hook logic
      console.log(parseResponse);
    },
  );
};
