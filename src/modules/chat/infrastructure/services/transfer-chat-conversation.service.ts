import type {
  TransferChatConversationRequest,
  TransferChatConversationResponse,
} from '../../domain/interfaces';
import type {
  TransferChatConversationRequestDTO,
  TransferChatConversationResponseDTO,
} from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { TransferChatConversationMapper } from '../mappers/transfer-chat-conversation.mapper';

export const transferChatConversationService = async (
  request: TransferChatConversationRequest,
): Promise<TransferChatConversationResponse> => {
  const parsedRequest = TransferChatConversationMapper.mapTo(request);

  const response = await gnetworkAxiosApiClient.post<
    TransferChatConversationRequestDTO,
    TransferChatConversationResponseDTO
  >(
    CHAT_RESOURCES.TRANSFER_CHAT_CONVERSATION(request?.contactId),
    parsedRequest,
  );

  if (response?.error || !response?.success || !response?.results) {
    throw new BaseException({
      message: response?.error,
      status: response?.status,
    });
  }

  return TransferChatConversationMapper.mapFrom(response);
};
