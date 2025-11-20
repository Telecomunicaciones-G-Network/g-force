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
      extra: input?.extra,
      messages:
        input?.results?.map((item) =>
          GetChatMessagesMapper.mapFromArray(item),
        ) ?? [],
    };
  }

  static mapFromArray(input: GetChatMessagesResult): MessageValues {
    return {
      id: input?.id,
      caption: input?.caption,
      contacts: input?.contacts?.map((contact) => {
        return {
          birthday: contact?.birthday,
          emails: contact?.emails,
          name: contact?.formatted_name,
          phoneNumbers: contact?.phone_numbers,
          urls: contact?.urls,
        };
      }),
      conversationId: input?.conversation_id,
      createdAt: input?.created_at,
      deliveredAt: input?.delivered_at,
      direction: input?.direction,
      failedAt: input?.failed_at,
      forwarded: input?.forwarded,
      forwardedManyTimes: input?.forwarded_many_times,
      location: input?.location,
      media: {
        mimetype: input?.media?.mime_type,
        type: input?.media?.type,
        url: input?.media?.url,
      },
      platform: input?.platform,
      platformId: input?.platform_id,
      reactions: input?.reactions?.map((reaction) => {
        return {
          agentId: reaction?.agent_id,
          contactId: reaction?.contact_id,
          emoji: reaction?.emoji,
        };
      }),
      readAt: input?.read_at,
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
