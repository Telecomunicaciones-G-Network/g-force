// DONE:

import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  MessageValues,
} from '../../domain/interfaces';
import type {
  GetChatMessagesRequestDTO,
  GetChatMessagesResponseDTO,
} from '../dtos';
import { GetChatMessagesResult } from '../interfaces';

export class GetChatMessagesMapper {
  static mapFrom(input: GetChatMessagesResponseDTO): GetChatMessagesResponse {
    return {
      status: input?.status,
      success: input?.success,
      cursor: input?.cursor,
      hasMore: input?.hasMore,
      nextCursor: input?.nextCursor,
      error: input?.error,
      messages: input?.results?.map(GetChatMessagesMapper.mapFromArray) ?? [],
    };
  }

  static mapFromArray(input: GetChatMessagesResult): MessageValues {
    return {
      id: input?.id,
      conversationId: input?.conversationId,
      createdAt: input?.createdAt,
      deliveredAt: input?.deliveredAt,
      direction: input?.direction,
      failedAt: input?.failedAt,
      readAt: input?.readAt,
      sender: input?.sender,
      status: input?.status,
      text: input?.text,
      type: input?.type,
    };
  }

  static mapTo(output: GetChatMessagesRequest): GetChatMessagesRequestDTO {
    return {
      contact_id: output?.contactId,
      cursor: output?.cursor,
      limit: output?.limit,
    };
  }
}
