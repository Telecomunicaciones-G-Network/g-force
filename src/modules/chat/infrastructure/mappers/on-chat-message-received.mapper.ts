import type { Message } from '../../domain/interfaces';
import type { OnChatMessageReceivedResponseDTO } from '../dtos';

import { MessageDirections } from '../../domain/enums/message-directions.enum';
import { MessageStatus } from '../../domain/enums/message-status.enum';

/**
 * @name OnChatMessageReceivedMapper
 *
 * @description This mapper converts the on incomming message response DTO to the message domain.
 */
export class OnChatMessageReceivedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on incomming message response DTO to the message domain.
   *
   * @param {OnIncommingMessageResponseDTO} input - The on incomming message response DTO.
   *
   * @returns {Message | null} The message domain.
   */
  static mapFrom(input: OnChatMessageReceivedResponseDTO): Message | null {
    return {
      id: input?.message_id,
      contacts: input?.contacts
        ? input?.contacts.map((contact) => ({
            birthday: contact.birthday,
            emails: contact.emails,
            formattedName: contact.formatted_name,
            phoneNumbers: contact.phone_numbers,
            urls: contact.urls,
          }))
        : [],
      conversationId: input?.conversation_id,
      createdAt: input?.timestamp,
      deliveredAt: input?.timestamp,
      direction: MessageDirections.INCOMING,
      eventData: null,
      failedAt: null,
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
      readAt: input?.timestamp,
      replyToMessage: null,
      sender: {
        id: input?.contact_id,
        isBot: false,
        name: input?.contact_name,
      },
      sentAt: input?.timestamp,
      status: MessageStatus.DELIVERED,
      text: input?.text ?? null,
      type: input?.type,
      updatedAt: input?.timestamp,
    };
  }
}
