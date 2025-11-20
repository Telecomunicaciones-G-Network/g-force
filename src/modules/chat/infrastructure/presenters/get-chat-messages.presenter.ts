// DONE:

import type { GetChatMessagesResponse } from '../../domain/interfaces';
import type { GetChatMessagesViewModel } from '../viewmodels';

export const getChatMessagesPresenter = (
  input: GetChatMessagesResponse,
): GetChatMessagesViewModel => {
  return {
    cursor: input?.cursor ?? null,
    hasMore: input?.hasMore ?? false,
    nextCursor: input?.nextCursor ?? null,
    messages: input?.messages?.map((message) => {
      return {
        id: message?.id,
        createdAt: message?.createdAt,
        direction: message?.direction,
        sender: { id: message?.sender?.id, name: message?.sender?.name },
        status: message?.status,
        text: message?.text,
        type: message?.type,
      };
    }),
  };
};
