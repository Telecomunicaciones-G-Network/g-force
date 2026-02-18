'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

/**
 * @name useOnChatConversationAssignmentUpdated
 *
 * @description This hook listens to the on `conversation_assignment_updated` socket event:
 * When the assigned team and/or agent for a contact changes. Contains the data of the newly assigned team and agent,
 * the data of the unassigned team and agent, and the IDs of the contact and their current conversation.
 *
 * [Contact event]
 *
 * @returns void
 */
export const useOnChatConversationAssignmentUpdated = () => {
  onSocketEvent<unknown>(
    socketEventsDictionary.CHAT_CONVERSATION_ASSIGNMENT_UPDATED,
    (data: unknown) => {
      const _parseResponse = JSON.parse(data as unknown as string);

      // TODO:

      // TODO: If a conversation assignment is updated add a new message event on chat conversation store
      // TODO: Enable chat if assigned agent it is me
    },
  );
};
