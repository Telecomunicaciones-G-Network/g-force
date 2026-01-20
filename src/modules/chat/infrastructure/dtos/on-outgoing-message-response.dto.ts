import type {
  MediaStorageStatus,
  MediaType,
  MessageStatus,
  MessageType,
} from '../../domain/types';

/**
 * The response data for the outgoing message media.
 *
 * @property media_id - The ID of the media.
 * @property filename - The filename of the media.
 * @property mime_type - The MIME type of the media.
 * @property storage_status - The storage status of the media.
 * @property type - The type of the media.
 */
export interface OnOutgoingMessageResponseMediaDTO {
  media_id: string;
  filename: string;
  mime_type: string;
  storage_status: MediaStorageStatus;
  type: MediaType;
}

/**
 * The response data for the outgoing message sender.
 *
 * @property id - The ID of the sender.
 * @property is_bot - Whether the sender is a bot.
 * @property name - The name of the sender.
 */
export interface OnOutgoingMessageResponseSenderDTO {
  id: string;
  is_bot: boolean;
  name: string;
}

/**
 * The response data for the outgoing message.
 *
 * @property message_id - The ID of the message.
 * @property contact_id - The ID of the contact.
 * @property contacts - The contacts of the message.
 * @property conversation_id - The ID of the conversation.
 * @property created_at - The creation date of the message.
 * @property delivered_at - The delivery date of the message.
 * @property failed_at - The failure date of the message.
 * @property forwarded_many_times - Whether the message has been forwarded many times.
 * @property forwarded - Whether the message has been forwarded.
 * @property location - The location of the message.
 * @property media - The media of the message.
 * @property platform_id - The ID of the platform.
 * @property read_at - The read date of the message.
 * @property reply_to_message_id - The ID of the message being replied to.
 * @property sender - The sender of the message.
 * @property sent_at - The sent date of the message.
 * @property status - The status of the message.
 * @property text - The text of the message.
 * @property timestamp - The timestamp of the message.
 * @property type - The type of the message.
 * @property updated_at - The update date of the message.
 * @property direction - The direction of the message.
 * @property eventData - The event data of the message.
 * @property failedAt - The failure date of the message.
 * @property forwarded - Whether the message is forwarded.
 * @property forwardedManyTimes - Whether the message is forwarded many times.
 * @property interactiveOptions - The interactive options of the message.
 * @property location - The location of the message.
 * @property media - The media of the message.
 * @property reactions - The reactions of the message.
 * @property readAt - The read date of the message.
 * @property replyToMessage - The reply to message of the message.
 * @property sender - The sender of the message.
 * @property sentAt - The sent date of the message.
 * @property status - The status of the message.
 * @property text - The text of the message.
 * @property type - The type of the message.
 * @property updatedAt - The update date of the message.
 */
export interface OnOutgoingMessageResponseDTO {
  message_id: string;
  contact_id: string;
  contacts: null;
  conversation_id: string;
  created_at: string;
  delivered_at: string | null;
  failed_at: string | null;
  forwarded_many_times: boolean;
  forwarded: boolean;
  location: null;
  media: OnOutgoingMessageResponseMediaDTO | null;
  platform_id: string | null;
  read_at: string | null;
  reply_to_message_id: null;
  sender: OnOutgoingMessageResponseSenderDTO;
  sent_at: string | null;
  status: MessageStatus;
  text: string | null;
  timestamp: string;
  type: MessageType;
  updated_at: string;
}
