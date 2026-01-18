import type { MessageDirection, MessageStatus, MessageType } from '../types';
import type { Media } from './media.interface';
import type { MessageContact } from './message-contact.interface';
import type { MessageEventData } from './message-event-data.interface';
import type { MessageLocation } from './message-location.interface';
import type { MessageReaction } from './message-reaction.interface';
import type { MessageSender } from './message-sender.interface';

/**
 * Message interface
 *
 * @property id - The ID of the message
 * @property contacts - The contacts of the message
 * @property conversationId - The ID of the conversation
 * @property createdAt - The creation date of the message
 * @property deliveredAt - The delivery date of the message
 * @property direction - The direction of the message
 * @property eventData - The event data of the message
 * @property failedAt - The failure date of the message
 * @property forwarded - Whether the message is forwarded
 * @property forwardedManyTimes - Whether the message is forwarded many times
 * @property interactiveOptions - The interactive options of the message
 * @property location - The location of the message
 * @property media - The media of the message
 * @property reactions - The reactions of the message
 * @property readAt - The read date of the message
 * @property replyToMessage - The reply to message of the message
 * @property sender - The sender of the message
 * @property sentAt - The sent date of the message
 * @property status - The status of the message
 * @property text - The text of the message
 * @property type - The type of the message
 * @property updatedAt - The update date of the message
 */
export interface Message {
  id: string;
  contacts: MessageContact[];
  conversationId: string;
  createdAt: string;
  deliveredAt: string | null;
  direction: MessageDirection;
  eventData: MessageEventData | null;
  failedAt: string | null;
  forwarded: boolean;
  forwardedManyTimes: boolean;
  interactiveOptions: null;
  location: MessageLocation | null;
  media: Media | null;
  reactions: MessageReaction[];
  readAt: string | null;
  replyToMessage: null;
  sender: MessageSender;
  sentAt: string | null;
  status: MessageStatus;
  text: string | null;
  type: MessageType;
  updatedAt: string | null;
}
