import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';
import { useContactStore } from '../stores/contact-store/contact.store';
import { ChatModes } from '../enums/chat-modes.enum';

interface OnConversationFinishedResponseDTO {
  contact_id: string;
  conversation_id: string;
}

export const useOnConversationFinished = () => {
  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const deleteOneContactById = useContactStore(
    (state) => state.deleteOneContactById,
  );

  onSocketEvent<OnConversationFinishedResponseDTO>(
    socketEventsDictionary.CONVERSATION_FINISHED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (!parseResponse?.contact_id || !parseResponse?.conversation_id) return;

      deleteOneContactById(parseResponse?.contact_id);
      setActiveContact(null);
      setChatMode(ChatModes.LIST);
    },
  );
};
