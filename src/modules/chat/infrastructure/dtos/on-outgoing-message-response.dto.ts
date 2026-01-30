import type {
  MediaStorageStatus,
  MediaType,
  MessageStatus,
  MessageType,
} from '../../domain/types';

/**
 * @name OnOutgoingMessageResponseMediaDTO
 *
 * @description This interface represents the response for the outgoing message media.
 *
 * @property {string} media_id - The ID of the media.
 * @property {string} filename - The filename of the media.
 * @property {string} mime_type - The MIME type of the media.
 * @property {MediaStorageStatus} storage_status - The storage status of the media.
 * @property {MediaType} type - The type of the media.
 */
export interface OnOutgoingMessageResponseMediaDTO {
  media_id: string;
  filename: string;
  mime_type: string;
  storage_status: MediaStorageStatus;
  type: MediaType;
}

/**
 * @name OnOutgoingMessageResponseSenderDTO
 *
 * @description This interface represents the response for the outgoing message sender.
 *
 * @property {string} id - The ID of the sender.
 * @property {boolean} is_bot - Whether the sender is a bot.
 * @property {string} name - The name of the sender.
 */
export interface OnOutgoingMessageResponseSenderDTO {
  id: string;
  is_bot: boolean;
  name: string;
}

/**
 * @name OnOutgoingMessageResponseDTO
 *
 * @description This interface represents the response for the outgoing message.
 *
 * @property {string} message_id - The ID of the message.
 * @property {string} contact_id - The ID of the contact.
 * @property {null} contacts - The contacts related to the message (always null).
 * @property {string} conversation_id - The ID of the conversation.
 * @property {string} created_at - The creation date of the message.
 * @property {string | null} delivered_at - The delivery date of the message.
 * @property {string | null} failed_at - The failure date of the message, if any.
 * @property {boolean} forwarded - Whether the message has been forwarded.
 * @property {boolean} forwarded_many_times - Whether the message has been forwarded many times.
 * @property {null} location - The location of the message (always null).
 * @property {OnOutgoingMessageResponseMediaDTO | null} media - The media attached to the message.
 * @property {string | null} platform_id - The platform-specific ID of the message.
 * @property {unknown} reactions - The reactions of the message.
 * @property {string | null} read_at - The date the message was read.
 * @property {null} reply_to_message_id - The ID of the message this is replying to (always null).
 * @property {OnOutgoingMessageResponseSenderDTO} sender - The sender of the message.
 * @property {string | null} sent_at - The sent date of the message.
 * @property {MessageStatus} status - The status of the message.
 * @property {string | null} text - The text of the message.
 * @property {string} timestamp - The timestamp of the message.
 * @property {MessageType} type - The type of the message.
 * @property {string} updated_at - The update date of the message.
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
