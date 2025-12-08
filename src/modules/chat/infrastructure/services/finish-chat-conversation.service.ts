import type { FinishChatConversationResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

export const finishChatConversationService = async (
  contactId: string,
): Promise<boolean> => {
  const response = await gnetworkAxiosApiClient.post<
    void,
    FinishChatConversationResponseDTO
  >(CHAT_RESOURCES.FINISH_CHAT_CONVERSATION(contactId));

  if (response?.error || !response?.results) {
    throw new BaseException({
      message: response?.error,
      status: response?.status,
    });
  }

  return response?.success;
};
