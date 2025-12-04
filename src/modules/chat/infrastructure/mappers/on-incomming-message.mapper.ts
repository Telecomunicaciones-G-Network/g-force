import type { ContactValues, MessageValues } from '../../domain/interfaces';
import type { OnIncommingMessageResponseDTO } from '../dtos';
import type { MediaType } from '../../domain/types';

import { MessageDirections } from '../../domain/enums/message-directions.enum';
import { MessageStatus } from '../../domain/enums/message-status.enum';

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
      contacts: input?.contacts ?? [],
      conversationId: input?.conversation_id,
      createdAt: input?.timestamp,
      deliveredAt: input?.timestamp,
      direction: MessageDirections.INCOMING,
      failedAt: null,
      forwarded: input?.forwarded,
      forwardedManyTimes: input?.forwarded_many_times,
      location: input?.location ?? null,
      media: input?.media?.media_id
        ? {
            id: input.media.media_id,
            filename: '',
            mediaId: input.media.media_id,
            mimeType: input.media.mime_type ?? '',
            type: input.media.type ?? ('IMAGE' as MediaType),
          }
        : null,
      reactions: [],
      readAt: null,
      sender: {
        id: contact?.id,
        name: contact?.name,
      },
      sentAt: input?.timestamp,
      status: MessageStatus.DELIVERED,
      text: input?.text,
      type: input?.type,
      updatedAt: input?.timestamp,
    };
  }
}
