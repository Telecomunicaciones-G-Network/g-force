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
   * @param id - The ID of the message
   * @param contacts - The contacts of the message
   * @param conversationId - The ID of the conversation
   * @param createdAt - The creation date of the message
   * @param deliveredAt - The delivery date of the message
   * @param direction - The direction of the message
   * @param eventData - The event data of the message
   * @param failedAt - The failure date of the message
   * @param forwarded - Whether the message is forwarded
   * @param forwardedManyTimes - Whether the message is forwarded many times
   * @param interactiveOptions - The interactive options of the message
   * @param location - The location of the message
   * @param media - The media of the message
   * @param reactions - The reactions of the message
   * @param readAt - The read date of the message
   * @param replyToMessage - The reply to message of the message
   * @param sender - The sender of the message
   * @param sentAt - The sent date of the message
   * @param status - The status of the message
   * @param text - The text of the message
   * @param type - The type of the message
   * @param updatedAt - The update date of the message
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
