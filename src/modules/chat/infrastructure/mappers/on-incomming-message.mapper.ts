import type { Contact, Message } from '../../domain/interfaces';
import type { OnIncommingMessageResponseDTO } from '../dtos';

import { MessageDirections } from '../../domain/enums/message-directions.enum';
import { MessageStatus } from '../../domain/enums/message-status.enum';

/**
 * On incoming message mapper
 *
 * This mapper converts the on incoming message response DTO to the message domain.
 */
export class OnIncommingMessageMapper {
  /**
   * Map from on incoming message response DTO to message domain
   *
   * @param input - The on incoming message response DTO
   * @param contact - The contact
   * @returns The message domain
   */
  static mapFrom(
    input: OnIncommingMessageResponseDTO,
    // TODO: I must to get rid of this parameter making that Backend send me always the contact_id
    contact: Contact | null,
  ): Message | null {
    if (!contact) {
      // TODO: Show alert for error
      // TODO: Register error
      return null;
    }

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
        id: input?.contact_id ?? contact?.id,
        isBot: false,
        name: contact?.name,
      },
      sentAt: input?.timestamp,
      status: MessageStatus.DELIVERED,
      text: input?.text ?? null,
      type: input?.type,
      updatedAt: input?.timestamp,
    };
  }
}
