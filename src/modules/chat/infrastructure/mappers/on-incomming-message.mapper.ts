import type { ContactValues, MessageValues } from '../../domain/interfaces';
import type { OnIncommingMessageResponseDTO } from '../dtos';

import { MessageDirections } from '../../domain/enums/message-directions.enum';
import { MessageStatus } from '../../domain/enums/message-status.enum';
import { MediaStorageStatus } from '../../domain/enums/media-storage-status.enum';

export class OnIncommingMessageMapper {
  static mapFrom(
    input: OnIncommingMessageResponseDTO,
    contact: ContactValues | null,
  ): MessageValues | null {
    if (!contact) {
      return null;
    }

    return {
      id: input?.message_id,
      caption: input?.caption,
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
      failedAt: null,
      forwarded: input?.forwarded,
      forwardedManyTimes: input?.forwarded_many_times,
      location: input?.location,
      media: input?.media
        ? {
            id: input?.media?.media_id,
            downloadUrl: null,
            filename: '',
            mimeType: input?.media?.mime_type,
            storageStatus: MediaStorageStatus.PENDING,
            type: input?.media?.type,
          }
        : null,
      reactions: [],
      readAt: input?.timestamp,
      sender: {
        id: contact?.id,
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
