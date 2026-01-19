import type {
  MediaStorageStatus,
  MediaType,
  MessageType,
} from '../../domain/types';

/**
 * The contact information of the message sender.
 *
 * @property birthday - The birthday of the message sender.
 * @property emails - The emails of the message sender.
 * @property formatted_name - The formatted name of the message sender.
 * @property phone_numbers - The phone numbers of the message sender.
 * @property urls - The URLs of the message sender.
 */
export interface OnIncommingMessageResponseContact {
  birthday: string;
  emails: string[];
  formatted_name: string;
  phone_numbers: string[];
  urls: string[];
}

/**
 * The location information of the message.
 *
 * @property address - The address of the message location.
 * @property latitude - The latitude of the message location.
 * @property longitude - The longitude of the message location.
 * @property name - The name of the message location.
 */
export interface OnIncommingMessageResponseLocation {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}

/**
 * The media information of the message.
 *
 * @property media_id - The ID of the media.
 * @property mime_type - The MIME type of the media.
 * @property storage_status - The storage status of the media.
 * @property type - The type of the media.
 */
export interface OnIncommingMesssageResponseMedia {
  media_id: string;
  mime_type: string;
  storage_status: MediaStorageStatus;
  type: MediaType;
}

/**
 * The response data for the incoming message.
 *
 * @property contacts - The contact information of the message sender.
 * @property conversation_id - The ID of the conversation.
 * @property forwarded - Whether the message has been forwarded.
 * @property forwarded_many_times - Whether the message has been forwarded many times.
 * @property location - The location information of the message.
 * @property media - The media information of the message.
 * @property message_id - The ID of the message.
 * @property reply_to_message_id - The ID of the message being replied to.
 * @property text - The text of the message.
 * @property timestamp - The timestamp of the message.
 * @property type - The type of the message.
 */
export interface OnIncommingMessageResponseDTO {
  contacts: OnIncommingMessageResponseContact[] | null;
  conversation_id: string;
  forwarded_many_times: boolean;
  forwarded: boolean;
  location: OnIncommingMessageResponseLocation | null;
  media: OnIncommingMesssageResponseMedia | null;
  message_id: string;
  reply_to_message_id: string | null;
  text: string | null;
  timestamp: string;
  type: MessageType;
}
