import type {
  MediaStorageStatus,
  MediaType,
  MessageType,
} from '../../domain/types';

/**
 * @name OnChatMessageReceivedResponseContact
 *
 * @description This interface represents the contact information of the message sender.
 *
 * @property {string} birthday - The birthday of the message sender.
 * @property {string[]} emails - The emails of the message sender.
 * @property {string} formatted_name - The formatted name of the message sender.
 * @property {string[]} phone_numbers - The phone numbers of the message sender.
 * @property {string[]} urls - The URLs of the message sender.
 */
export interface OnChatMessageReceivedResponseContact {
  birthday: string;
  emails: string[];
  formatted_name: string;
  phone_numbers: string[];
  urls: string[];
}

/**
 * @name OnChatMessageReceivedResponseLocation
 *
 * @description This interface represents the location information of the message.
 *
 * @property {string} address - The address of the message location.
 * @property {number} latitude - The latitude of the message location.
 * @property {number} longitude - The longitude of the message location.
 * @property {string} name - The name of the message location.
 */
export interface OnChatMessageReceivedResponseLocation {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}

/**
 * @name OnChatMessageReceivedResponseMedia
 *
 * @description This interface represents the media information of the message.
 *
 * @property {string} media_id - The ID of the media.
 * @property {string} filename - The filename of the media.
 * @property {string} mime_type - The MIME type of the media.
 * @property {MediaStorageStatus} storage_status - The storage status of the media.
 * @property {MediaType} type - The type of the media.
 */
export interface OnChatMessageReceivedResponseMedia {
  media_id: string;
  filename: string;
  mime_type: string;
  storage_status: MediaStorageStatus;
  type: MediaType;
}

/**
 * @name OnChatMessageReceivedResponseDTO
 *
 * @description This interface represents the response for the incoming message.
 *
 * @property {string} contact_id - The ID of the contact.
 * @property {string} contact_name - The name of the contact.
 * @property {OnIncommingMessageResponseContact[] | null} contacts - The contact information of the message sender.
 * @property {string} conversation_id - The ID of the conversation.
 * @property {boolean} forwarded - Whether the message has been forwarded.
 * @property {boolean} forwarded_many_times - Whether the message has been forwarded many times.
 * @property {OnIncommingMessageResponseLocation | null} location - The location information of the message.
 * @property {OnIncommingMesssageResponseMedia | null} media - The media information of the message.
 * @property {string} message_id - The ID of the message.
 * @property {string | null} reply_to_message_id - The ID of the message being replied to.
 * @property {string | null} text - The text of the message.
 * @property {string} timestamp - The timestamp of the message.
 * @property {MessageType} type - The type of the message.
 */
export interface OnChatMessageReceivedResponseDTO {
  contact_id: string;
  contact_name: string;
  contacts: OnChatMessageReceivedResponseContact[] | null;
  conversation_id: string;
  forwarded_many_times: boolean;
  forwarded: boolean;
  location: OnChatMessageReceivedResponseLocation | null;
  media: OnChatMessageReceivedResponseMedia | null;
  message_id: string;
  reply_to_message_id: string | null;
  text: string | null;
  timestamp: string;
  type: MessageType;
}
