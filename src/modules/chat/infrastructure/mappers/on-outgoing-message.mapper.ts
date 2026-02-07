import type { Message } from '../../domain/interfaces';
import type { OnOutgoingMessageResponseDTO } from '../dtos';

import { MessageDirections } from '../../domain/enums/message-directions.enum';

/**
 * @name OnOutgoingMessageMapper
 *
 * @description This mapper converts the on outgoing message response DTO to the message domain.
 */
export class OnOutgoingMessageMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on outgoing message response DTO to the message domain.
   *
   * @param {OnOutgoingMessageResponseDTO} input - The on outgoing message response DTO.
   *
   * @returns {Message} The message domain.
   */
  static mapFrom(input: OnOutgoingMessageResponseDTO): Message {
    return {
      id: input?.message_id,
      contacts: input?.contacts ?? [],
      conversationId: input?.conversation_id,
      createdAt: input?.created_at,
      deliveredAt: input?.delivered_at,
      direction: MessageDirections.OUTGOING,
      eventData: null,
      failedAt: input?.failed_at,
      forwarded: input?.forwarded,
      forwardedManyTimes: input?.forwarded_many_times,
      interactiveOptions: null,
      location: input?.location,
      media: input?.media
        ? {
            id: input?.media?.media_id,
            downloadUrl: null,
            filename: input?.media?.filename,
            mimeType: input?.media?.mime_type,
            storageStatus: input?.media?.storage_status,
            type: input?.media?.type,
          }
        : null,
      reactions: [],
      readAt: input?.read_at,
      replyToMessage: null,
      sender: {
        id: input?.sender?.id,
        isBot: input?.sender?.is_bot,
        name: input?.sender?.name,
      },
      sentAt: input?.sent_at,
      status: input?.status,
      text: input?.text,
      type: input?.type,
      updatedAt: input?.updated_at,
    };
  }
}
