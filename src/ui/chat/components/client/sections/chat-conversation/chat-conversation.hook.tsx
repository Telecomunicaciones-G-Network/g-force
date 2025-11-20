// TODO: Debo colocar la key de react query en un diccionario de recursos
// TODO: Debo quitar esa contante de limit de alli
// FIXME: Debo revisar porque el tiempo de peticion de los mensajes es demasiado elevado de 5 a 12 segundos

'use client';

import type { GetChatMessagesResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { GetChatMessagesQuery } from '@module-chat/infrastructure/queries/get-chat-messages.query';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatConversation = () => {
  const activeContact = useChatStore((state) => state.activeContact);
  const limit = 10;

  const {
    data: chatMessagesResponse,
    isError,
    isLoading,
  } = useQuery<GetChatMessagesResponse>({
    queryKey: ['chat-messages', activeContact?.id, { limit }],
    queryFn: () =>
      GetChatMessagesQuery({
        contactId: activeContact?.id ?? '',
        limit,
      }),
    enabled: !!activeContact?.id,
  });

  const setActiveContact = useChatStore((state) => state.setActiveContact);
  const setChatMode = useChatStore((state) => state.setChatMode);

  const goBackChatList = () => {
    setChatMode(ChatModes.LIST);
    setActiveContact(null);
  };

  const goToChatDetails = () =>
    useChatStore.setState({ chatMode: ChatModes.DETAILS });

  return {
    activeContact,
    chatMessages: chatMessagesResponse?.messages ?? [],
    isError,
    isLoading,
    goBackChatList,
    goToChatDetails,
  };
};
