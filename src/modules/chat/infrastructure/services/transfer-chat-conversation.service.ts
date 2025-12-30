import type { TransferChatConversationRequest } from '../../domain/interfaces';
import type { TransferChatConversationRequestDTO } from '../dtos';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { TransferChatConversationMapper } from '../mappers/transfer-chat-conversation.mapper';

export const transferChatConversationService = async (
  request: TransferChatConversationRequest,
): Promise<void> => {
  const parsedRequest = TransferChatConversationMapper.mapTo(request);

  const response = await gnetworkAxiosApiClient.post<
    TransferChatConversationRequestDTO,
    void
  >(
    CHAT_RESOURCES.TRANSFER_CHAT_CONVERSATION(request?.contactId),
    parsedRequest,
  );

  console.log('response', response);
};
