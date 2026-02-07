'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

/**
 * @name useOnReactionAdded
 *
 * @description This hook listens to the `REACTION_ADDED` socket event:
 * When a reaction emoji is added to a message (incoming or outgoing). Contains the message ID and the emoji.
 *
 * [Contact event]
 *
 * @returns void
 */
export const useOnReactionAdded = () => {
  onSocketEvent<unknown>(
    socketEventsDictionary.REACTION_ADDED,
    (data: unknown) => {
      const parseResponse = JSON.parse(data as unknown as string);

      // TODO: Implement the hook logic
      console.log(parseResponse);
    },
  );
};
