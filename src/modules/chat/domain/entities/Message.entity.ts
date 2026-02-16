import type {
  Media,
  Message as MessageValues,
  MessageContact,
  MessageEventData,
  MessageLocation,
  MessageReaction,
  MessageSender,
} from '../interfaces';
import type { MessageDirection, MessageStatus, MessageType } from '../types';

/**
 * @name Message
 *
 * @description This entity represents a message in the chat system.
 *
 * @property {string} id - The ID of the message.
 * @property {MessageContact[]} contacts - The contacts associated with the message.
 * @property {string} conversationId - The ID of the conversation.
 * @property {string} createdAt - The creation date of the message.
 * @property {string | null} deliveredAt - The delivery date of the message.
 * @property {MessageDirection} direction - The direction of the message.
 * @property {MessageEventData | null} eventData - The event data of the message.
 * @property {string | null} failedAt - The failure date of the message.
 * @property {boolean} forwarded - Whether the message was forwarded.
 * @property {boolean} forwardedManyTimes - Whether the message was forwarded many times.
 * @property {null} interactiveOptions - The interactive options of the message.
 * @property {MessageLocation | null} location - The location of the message.
 * @property {Media | null} media - The media associated with the message.
 * @property {MessageReaction[]} reactions - The reactions to the message.
 * @property {string | null} readAt - The read date of the message.
 * @property {null} replyToMessage - The message that this message is replying to.
 * @property {MessageSender} sender - The sender of the message.
 * @property {string | null} sentAt - The sent date of the message.
 * @property {MessageStatus} status - The status of the message.
 * @property {string | null} text - The text content of the message.
 * @property {MessageType} type - The type of the message.
 * @property {string | null} updatedAt - The update date of the message.
 */
export class Message {
  /**
   * Constructor
   */
  constructor(
    public id: string,
    public contacts: MessageContact[] = [],
    public conversationId: string,
    public createdAt: string = new Date().toISOString(),
    public deliveredAt: string | null = null,
    public direction: MessageDirection,
    public eventData: MessageEventData | null = null,
    public failedAt: string | null = null,
    public forwarded: boolean = false,
    public forwardedManyTimes: boolean = false,
    public interactiveOptions: null = null,
    public location: MessageLocation | null = null,
    public media: Media | null = null,
    public reactions: MessageReaction[] = [],
    public readAt: string | null = null,
    public replyToMessage: null = null,
    public sender: MessageSender,
    public sentAt: string | null = null,
    public status: MessageStatus,
    public text: string | null = null,
    public type: MessageType,
    public updatedAt: string | null = null,
  ) {}

  /**
   * @name toValues
   *
   * @description Convert the message to values.
   *
   * @returns {MessageValues} The message values.
   */
  public toValues(): MessageValues {
    return {
      id: this.id,
      contacts: this.contacts,
      conversationId: this.conversationId,
      createdAt: this.createdAt,
      deliveredAt: this.deliveredAt,
      direction: this.direction,
      eventData: this.eventData,
      failedAt: this.failedAt,
      forwarded: this.forwarded,
      forwardedManyTimes: this.forwardedManyTimes,
      interactiveOptions: this.interactiveOptions,
      location: this.location,
      media: this.media,
      reactions: this.reactions,
      readAt: this.readAt,
      replyToMessage: this.replyToMessage,
      sender: this.sender,
      sentAt: this.sentAt,
      status: this.status,
      text: this.text,
      type: this.type,
      updatedAt: this.updatedAt,
    };
  }
}
