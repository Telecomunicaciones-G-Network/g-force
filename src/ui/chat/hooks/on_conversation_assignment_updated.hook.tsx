'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

/**
 * On conversation assignment updated hook
 *
 * This hook listens to the on `conversation_assignment_updated` socket event:
 * When the assigned team and/or agent for a contact changes. Contains the data of the newly assigned team and agent,
 * the data of the unassigned team and agent, and the IDs of the contact and their current conversation.
 * [Contact event]
 */
export const useOnConversationAssignmentUpdated = () => {
  onSocketEvent<unknown>(
    socketEventsDictionary.CONVERSATION_ASSIGNMENT_UPDATED,
    (data: unknown) => {
      const parseResponse = JSON.parse(data as unknown as string);

      console.log(parseResponse);
    },
  );
};
