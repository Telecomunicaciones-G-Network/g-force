import type {
  MediaValues,
  MessageContactValues,
  MessageLocationValues,
  MessageSenderValues,
  MessageValues,
} from '../interfaces';
import type { MessageDirection, MessageStatus, MessageType } from '../types';

export class Message {
  private id: string;
  private caption?: string;
  private contacts?: MessageContactValues[];
  private conversationId: string;
  private createdAt: string;
  private deliveredAt?: string | null;
  private direction: MessageDirection;
  private failedAt?: string | null;
  private forwarded?: boolean;
  private forwardedManyTimes?: boolean;
  private location?: MessageLocationValues;
  private media?: MediaValues;
  private readAt?: string | null;
  private sender: MessageSenderValues;
  private sentAt?: string | null;
  private status: MessageStatus;
  private text?: string | null;
  private type: MessageType;

  constructor(
    id: string,
    caption: string,
    contacts: MessageContactValues[] = [],
    conversationId: string,
    createdAt: string = new Date().toISOString(),
    deliveredAt: string | null = null,
    direction: MessageDirection,
    failedAt: string | null = null,
    forwarded: boolean = false,
    forwardedManyTimes: boolean = false,
    location: MessageLocationValues,
    media: MediaValues,
    readAt: string | null = null,
    sender: MessageSenderValues,
    sentAt: string | null = null,
    status: MessageStatus,
    text: string | null = null,
    type: MessageType,
  ) {
    this.id = id;
    this.caption = caption;
    this.contacts = contacts;
    this.conversationId = conversationId;
    this.createdAt = createdAt;
    this.deliveredAt = deliveredAt;
    this.direction = direction;
    this.failedAt = failedAt;
    this.forwarded = forwarded;
    this.forwardedManyTimes = forwardedManyTimes;
    this.location = location;
    this.media = media;
    this.readAt = readAt;
    this.sender = sender;
    this.sentAt = sentAt;
    this.status = status;
    this.text = text;
    this.type = type;
  }

  public toValues(): MessageValues {
    return {
      id: this.id,
      caption: this.caption,
      contacts: this.contacts,
      conversationId: this.conversationId,
      createdAt: this.createdAt,
      deliveredAt: this.deliveredAt,
      direction: this.direction,
      failedAt: this.failedAt,
      forwarded: this.forwarded,
      forwardedManyTimes: this.forwardedManyTimes,
      location: this.location,
      media: this.media,
      readAt: this.readAt,
      sender: this.sender,
      sentAt: this.sentAt,
      status: this.status,
      text: this.text,
      type: this.type,
    };
  }
}
