'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageEventTypes } from '@module-chat/domain/enums/message-event-types.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

interface OnChatConversationCreatedResponseDTO {
  contact_id: string;
  conversation_id: string;
}

/**
 * @name useOnChatConversationCreated
 *
 * @description This hook listens to the on `conversation_created` socket event:
 * - When a new conversation is started with the contact. For now, this event will never be received live because only
 * chats with existing conversations appear, but in the future, there should be a "historical" view with all contacts
 * who have ever written, and it will be possible to receive this event live.
 * - No actions at the moment.
 *
 * TODO: I need to transfer the dto to own file
 * TODO: Check the logic when create a message event
 *
 */
export const useOnChatConversationCreated = () => {
  const addMessage = useChatStore((state) => state.addMessage);

  // TODO: Type the event
  onSocketEvent<OnChatConversationCreatedResponseDTO>(
    socketEventsDictionary.CHAT_CONVERSATION_CREATED,
    // TODO: Type the data
    (data: OnChatConversationCreatedResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (!parseResponse?.contact_id || !parseResponse?.conversation_id)
        // TODO: Set alert for error
        // TODO: Register error
        return;

      console.log(parseResponse);

      addMessage({
        id: crypto.randomUUID(),
        contacts: [],
        conversationId: parseResponse?.conversation_id,
        createdAt: new Date().toISOString(),
        deliveredAt: null,
        direction: MessageDirections.OUTGOING,
        eventData: {
          agent: null,
          assignedByAgent: null,
          eventType: MessageEventTypes.CONVERSATION_CREATED,
          finishedByAgent: null,
          previousAgent: null,
          team: null,
          previousTeam: null,
          timestamp: new Date().toISOString(),
        },
        failedAt: null,
        forwarded: false,
        forwardedManyTimes: false,
        interactiveOptions: null,
        location: null,
        media: null,
        reactions: [],
        readAt: null,
        replyToMessage: null,
        sender: {
          // TODO: Set agent data when backend add them
          id: parseResponse?.contact_id,
          name: parseResponse?.contact_id,
          isBot: false,
        },
        sentAt: new Date().toISOString(),
        status: MessageStatus.SENT,
        text: null,
        type: MessageTypes.CONVERSATION_EVENT,
        updatedAt: null,
      });
    },
  );
};
