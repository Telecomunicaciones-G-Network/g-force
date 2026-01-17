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
 * Message entity
 *
 * This entity represents a message in the chat system.
 */
export class Message {
  /**
   * Constructor
   *
   * @param {string} id - The ID of the message
   * @param {MessageContact[]} contacts - The contacts of the message
   * @param {string} conversationId - The ID of the conversation
   * @param {string} createdAt - The creation date of the message
   * @param {string | null} deliveredAt - The delivery date of the message
   * @param {MessageDirection} direction - The direction of the message
   * @param {MessageEventData | null} eventData - The event data of the message
   * @param {string | null} failedAt - The failure date of the message
   * @param {boolean} forwarded - Whether the message is forwarded
   * @param {boolean} forwardedManyTimes - Whether the message is forwarded many times
   * @param {null} interactiveOptions - The interactive options of the message
   * @param {MessageLocation | null} location - The location of the message
   * @param {Media | null} media - The media of the message
   * @param {MessageReaction[]} reactions - The reactions of the message
   * @param {string | null} readAt - The read date of the message
   * @param {null} replyToMessage - The reply to message of the message
   * @param {MessageSender} sender - The sender of the message
   * @param {string | null} sentAt - The sent date of the message
   * @param {MessageStatus} status - The status of the message
   * @param {string | null} text - The text of the message
   * @param {MessageType} type - The type of the message
   * @param {string | null} updatedAt - The update date of the message
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
   * Get the ID of the message
   *
   * @returns {string} The ID of the message
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Convert the message to values
   *
   * @returns {MessageValues} The message values
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
