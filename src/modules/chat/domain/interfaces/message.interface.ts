import type { MessageDirection, MessageStatus, MessageType } from '../types';
import type { InteractiveOptions } from './interactive-options.interface';
import type { Media } from './media.interface';
import type { MessageContact } from './message-contact.interface';
import type { MessageEventData } from './message-event-data.interface';
import type { MessageLocation } from './message-location.interface';
import type { MessageReaction } from './message-reaction.interface';
import type { MessageSender } from './message-sender.interface';

/**
 * @name Message
 *
 * @description This interface represents the values of a message.
 *
 * @property {string} id - The id of the message.
 * @property {MessageContact[]} contacts - The contacts of the message.
 * @property {string} conversationId - The id of the conversation.
 * @property {string} createdAt - The creation date of the message.
 * @property {string | null} deliveredAt - The delivery date of the message.
 * @property {MessageDirection} direction - The direction of the message.
 * @property {MessageEventData | null} eventData - The event data of the message.
 * @property {string | null} failedAt - The failure date of the message.
 * @property {boolean} forwarded - Whether the message is forwarded.
 * @property {boolean} forwardedManyTimes - Whether the message is forwarded many times.
 * @property {InteractiveOptions | null} interactiveOptions - The interactive options of the message.
 * @property {MessageLocation | null} location - The location of the message.
 * @property {Media | null} media - The media of the message.
 * @property {MessageReaction[]} reactions - The reactions of the message.
 * @property {string | null} readAt - The read date of the message.
 * @property {MessageReplyToMessage | null} replyToMessage - The reply to message of the message.
 * @property {MessageSender} sender - The sender of the message.
 * @property {string | null} sentAt - The sent date of the message.
 * @property {MessageStatus} status - The status of the message.
 * @property {string | null} text - The text of the message.
 * @property {MessageType} type - The type of the message.
 * @property {string | null} updatedAt - The update date of the message.
 */
export interface MessageReplyToMessage {
  id: string;
  sender?: MessageSender;
  textPreview?: string | null;
  type: MessageType;
}

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
  interactiveOptions: InteractiveOptions | null;
  location: MessageLocation | null;
  media: Media | null;
  reactions: MessageReaction[];
  readAt: string | null;
  replyToMessage: MessageReplyToMessage | null;
  sender: MessageSender;
  sentAt: string | null;
  status: MessageStatus;
  text: string | null;
  type: MessageType;
  updatedAt: string | null;
}
