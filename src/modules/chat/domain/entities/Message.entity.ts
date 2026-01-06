import type {
  MediaValues,
  MessageContactValues,
  MessageEventDataValues,
  MessageLocationValues,
  MessageReactionValues,
  MessageSenderValues,
  MessageValues,
} from '../interfaces';
import type { MessageDirection, MessageStatus, MessageType } from '../types';

export class Message {
  constructor(
    public id: string,
    public contacts: MessageContactValues[] = [],
    public conversationId: string,
    public createdAt: string = new Date().toISOString(),
    public deliveredAt: string | null = null,
    public direction: MessageDirection,
    public eventData: MessageEventDataValues | null = null,
    public failedAt: string | null = null,
    public forwarded: boolean = false,
    public forwardedManyTimes: boolean = false,
    public location: MessageLocationValues | null = null,
    public media: MediaValues | null = null,
    public reactions: MessageReactionValues[] = [],
    public readAt: string | null = null,
    public sender: MessageSenderValues,
    public sentAt: string | null = null,
    public status: MessageStatus,
    public text: string | null = null,
    public type: MessageType,
    public updatedAt: string | null = null,
  ) {}

  public getId(): string {
    return this.id;
  }

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
      location: this.location,
      media: this.media,
      reactions: this.reactions,
      readAt: this.readAt,
      sender: this.sender,
      sentAt: this.sentAt,
      status: this.status,
      text: this.text,
      type: this.type,
      updatedAt: this.updatedAt,
    };
  }
}
