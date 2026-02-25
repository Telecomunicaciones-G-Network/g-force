'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import type { Message } from '@module-chat/domain/interfaces';
import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageEventTypes } from '@module-chat/domain/enums/message-event-types.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { OnContactConversationAssignmentUpdatedMapper } from '@module-chat/infrastructure/mappers/on-contact-conversation-assignment-updated.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

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
  const activeContact = useContactStore((state) => state.activeContact);
  const activeAgent = useContactStore((state) => state.activeAgent);
  const addMessage = useChatStore((state) => state.addMessage);

  onSocketEvent<unknown>(
    socketEventsDictionary.CHAT_CONVERSATION_ASSIGNMENT_UPDATED,
    (data: unknown) => {
      const parseResponse = JSON.parse(data as unknown as string);

      console.log('socket event chat_conversation_assignment_updated', parseResponse);

      const response =
        OnContactConversationAssignmentUpdatedMapper.mapFrom(parseResponse);

      console.log('mapped response', response);

      console.log('ActiveContact:', activeContact);

      if (
        !response?.contactId ||
        !response?.conversationId || 
        response?.contactId !== activeContact?.id
      ) {
        console.log('Blocking event rendering, mismatch or missing ids. ActiveContactId:', activeContact?.id);
        return;
      }

      const eventMessage: Message = {
        id: crypto.randomUUID(),
        contacts: [],
        conversationId: response.conversationId,
        createdAt: new Date().toISOString(),
        deliveredAt: null,
        direction: MessageDirections.INCOMING,
        eventData: {
          agent: response?.agent
            ? { id: response.agent.id, name: response.agent.name }
            : null,
          assignedByAgent: parseResponse?.assigned_by_agent
            ? {
                id: parseResponse.assigned_by_agent.id,
                name: parseResponse.assigned_by_agent.full_name,
              }
            : {
                id: activeAgent?.id || 'system',
                name: activeAgent?.name || 'Sistema',
              },
          eventType: MessageEventTypes.CONVERSATION_ASSIGNMENT_UPDATED,
          finishedByAgent: null,
          previousAgent: null,
          previousTeam: null,
          team: response?.team
            ? ({
                id: response.team.id,
                name: response.team.name,
              // biome-ignore lint/suspicious/noExplicitAny: false positive
              } as any)
            : null,
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
        sender: { id: 'system', isBot: true, name: 'System' },
        sentAt: null,
        status: MessageStatus.READ,
        text: null,
        type: MessageTypes.CONVERSATION_EVENT,
        updatedAt: null,
      };

      addMessage(eventMessage);
    },
    [activeContact?.id, activeAgent?.id, activeAgent?.name, addMessage],
  );
};
