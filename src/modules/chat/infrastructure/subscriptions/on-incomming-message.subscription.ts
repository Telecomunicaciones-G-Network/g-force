import type { ContactValues, MessageValues } from '../../domain/interfaces';
import type { OnIncommingMessageDTO } from '../dtos';

import { MessageDirections } from '../../domain/enums/message-directions.enum';
import { MessageStatus } from '../../domain/enums/message-status.enum';

export const OnIncommingMessageSubscription = (
  values: OnIncommingMessageDTO,
  contact: ContactValues | null,
): MessageValues | null => {
  if (!contact) {
    return null;
  }

  return {
    id: values?.message_id,
    caption: values?.caption,
    contacts: values?.contacts ?? [],
    conversationId: values?.conversation_id,
    createdAt: values?.timestamp,
    deliveredAt: values?.timestamp,
    direction: MessageDirections.INCOMING,
    failedAt: null,
    forwarded: values?.forwarded,
    forwardedManyTimes: values?.forwarded_many_times,
    location: values?.location ?? null,
    media: values?.media ?? null,
    reactions: [],
    readAt: null,
    sender: {
      id: contact?.id,
      name: contact?.name,
    },
    sentAt: values?.timestamp,
    status: MessageStatus.DELIVERED,
    text: values?.text,
    type: values?.type,
    updatedAt: values?.timestamp,
  };
};
