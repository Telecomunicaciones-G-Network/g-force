'use client';

import type { OnContactConversationAssignmentUpdatedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { Sounder } from '@sounder/classes/sounder.class';

import { ContactAssignments } from '@module-chat/domain/enums/contact-assignments.enum';
import { ConversationStatus } from '@module-chat/domain/enums/conversation-status.enum';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnContactConversationAssignmentUpdatedMapper } from '@module-chat/infrastructure/mappers/on-contact-conversation-assignment-updated.mapper';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

const GNET_ID = '00000000-0000-0000-0000-000000000001';

/**
 * @name useOnContactConversationAssignmentUpdated
 *
 * @description This hook listens to the on `contact_conversation_assignment_updated` socket event:
 *
 * TODO: Do not use GNET_ID just like this
 */
export const useOnContactConversationAssignmentUpdated = () => {
  const activeAgent = useContactStore((state) => state.activeAgent);
  const assignment = useContactStore((state) => state.contactAssignment);
  const conversationStatus = useContactStore(
    (state) => state.conversationStatus,
  );
  const team = useContactStore((state) => state.team);

  const deleteContactFromStore = useContactStore(
    (state) => state.deleteOneContactById,
  );
  const existContactOnStore = useContactStore(
    (state) => state.existContactOnStore,
  );
  const updateContactLatestConversation = useContactStore(
    (state) => state.updateContactLatestConversation,
  );

  onSocketEvent<OnContactConversationAssignmentUpdatedResponseDTO>(
    socketEventsDictionary.CONTACT_CONVERSATION_ASSIGNMENT_UPDATED,
    async (data: OnContactConversationAssignmentUpdatedResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (!parseResponse?.contact_id || !parseResponse?.conversation_id)
        // TODO: Set alert for error
        // TODO: Register error
        return;

      const response =
        OnContactConversationAssignmentUpdatedMapper.mapFrom(parseResponse);

      if (!response?.contactId)
        // TODO: Set alert for error
        // TODO: Register error
        return;

      const existContactOnStoreValidation = existContactOnStore(
        response?.contactId,
      );

      if (
        assignment === ContactAssignments.BOT &&
        response?.agent?.id !== GNET_ID
      ) {
        console.log('Eliminar del store este contacto asignado a bot gnet');
        deleteContactFromStore(response?.contactId);
        return;
      }

      if (
        assignment === ContactAssignments.ME &&
        response?.agent?.id !== activeAgent?.id
      ) {
        console.log('Eliminar del store este contacto asignado a me');
        deleteContactFromStore(response?.contactId);
        return;
      }

      if (
        assignment === ContactAssignments.MY_TEAMS &&
        !activeAgent?.teams?.includes(response?.team?.id)
      ) {
        console.log('Eliminar del store este contacto asignado a my teams');
        deleteContactFromStore(response?.contactId);
        return;
      }

      if (
        response?.agent?.id &&
        conversationStatus !== ConversationStatus.ASSIGNED
      ) {
        console.log(
          'Eliminar del store este contacto la conversacion no esta asignada',
        );
        deleteContactFromStore(response?.contactId);
        return;
      }

      if (
        !response?.agent?.id &&
        conversationStatus === ConversationStatus.ASSIGNED
      ) {
        console.log(
          'Eliminar del store este contacto la conversacion no esta asignada',
        );
        deleteContactFromStore(response?.contactId);
        return;
      }

      if (team !== null && team !== response?.team?.id) {
        console.log('Eliminar del store este contacto el equipo es distinto');
        deleteContactFromStore(response?.contactId);
        return;
      }

      if (existContactOnStoreValidation) {
        console.log('Actualizar en el store este contacto');
        updateContactLatestConversation(response?.contactId, {
          agent: response?.agent
            ? {
                id: response?.agent?.id,
                name: response?.agent?.name,
              }
            : null,
          status: response?.agent
            ? ConversationStatus.ASSIGNED
            : ConversationStatus.WAITING,
          team: response?.team
            ? {
                id: response?.team?.id,
                name: response?.team?.name,
              }
            : null,
        });

        return;
      } else {
        console.log('Debo agregar en el store este contacto');
        const sounder = new Sounder(chatSoundDictionary.contactAssignment);

        sounder.playAudio();

        await revalidateChatContactsAction();
      }
    },
  );
};
