import type { Message } from '../../domain/interfaces';
import type { OnOutgoingMessageResponseDTO } from '../dtos';

import { MessageDirections } from '../../domain/enums/message-directions.enum';

/**
 * On outgoing message mapper
 *
 * This mapper converts the on outgoing message response DTO to the message domain.
 */
export class OnOutgoingMessageMapper {
  /**
   * Map from on outgoing message response DTO to message domain
   *
   * @param data - The on outgoing message response DTO
   *
   * @returns The message domain
   */
  static mapFrom(data: OnOutgoingMessageResponseDTO): Message {
    return {
      id: data?.message_id,
      contacts: data?.contacts ?? [],
      conversationId: data?.conversation_id,
      createdAt: data?.created_at,
      deliveredAt: data?.delivered_at,
      direction: MessageDirections.OUTGOING,
      eventData: null,
      failedAt: data?.failed_at,
      forwarded: data?.forwarded,
      forwardedManyTimes: data?.forwarded_many_times,
      interactiveOptions: null,
      location: data?.location,
      media: data?.media
        ? {
            id: data?.media?.media_id,
            downloadUrl: null,
            filename: data?.media?.filename,
            mimeType: data?.media?.mime_type,
            storageStatus: data?.media?.storage_status,
            type: data?.media?.type,
          }
        : null,
      reactions: [],
      readAt: data?.read_at,
      replyToMessage: null,
      sender: {
        id: data?.sender?.id,
        isBot: data?.sender?.is_bot,
        name: data?.sender?.name,
      },
      sentAt: data?.sent_at,
      status: data?.status,
      text: data?.text,
      type: data?.type,
      updatedAt: data?.updated_at,
    };
  }
}
