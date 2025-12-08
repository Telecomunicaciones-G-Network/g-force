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
      conversationId: input?.conversation_id,
      contacts:
        input?.contacts?.map((contact) => ({
          birthday: contact.birthday,
          emails: contact.emails,
          formattedName: contact.formatted_name,
          phoneNumbers: contact.phone_numbers,
          urls: contact.urls,
        })) ?? [],
      createdAt: input?.created_at,
      deliveredAt: input?.delivered_at,
      direction: input?.direction,
      failedAt: input?.failed_at,
      forwarded: input?.forwarded,
      forwardedManyTimes: input?.forwarded_many_times,
      location: input?.location
        ? {
            address: input.location.address,
            latitude: input.location.latitude,
            longitude: input.location.longitude,
            name: input.location.name,
          }
        : null,
      media: input?.media
        ? {
            id: input.media.id,
            downloadUrl: input.media.download_url,
            filename: input.media.filename,
            mimeType: input.media.mime_type,
            storageStatus: input.media.storage_status,
            type: input.media.type,
          }
        : null,
      reactions:
        input?.reactions?.map((reaction) => ({
          agentId: reaction.agent_id,
          contactId: reaction.contact_id,
          emoji: reaction.emoji,
        })) ?? [],
      readAt: input?.read_at,
      sender: {
        id: input?.sender?.id,
        isBot: input?.sender?.is_bot ?? false,
        name: input?.sender?.name,
      },
      sentAt: input?.sent_at,
      status: input?.status,
      text: input?.text,
      type: input?.type,
      updatedAt: input?.updated_at,
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
