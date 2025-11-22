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
      cursor: input?.cursor,
      error: input?.error,
      hasMore: input?.hasMore,
      messages: input?.results?.map(GetChatMessagesMapper.mapFromArray) ?? [],
      nextCursor: input?.nextCursor,
      status: input?.status,
      success: input?.success,
    };
  }

  static mapFromArray(input: GetChatMessagesResult): MessageValues {
    return {
      id: input?.id,
      caption: input?.caption,
      contacts: input?.contacts,
      conversationId: input?.conversationId,
      createdAt: input?.createdAt,
      deliveredAt: input?.deliveredAt,
      direction: input?.direction,
      failedAt: input?.failedAt,
      forwarded: input?.forwarded,
      forwardedManyTimes: input?.forwardedManyTimes,
      location: input?.location ?? null,
      media: input?.media ?? null,
      reactions: input?.reactions,
      readAt: input?.readAt,
      sender: input?.sender,
      sentAt: input?.sentAt,
      status: input?.status,
      text: input?.text,
      type: input?.type,
      updatedAt: input?.updatedAt,
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
