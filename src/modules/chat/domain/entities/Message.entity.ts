// DONE:

import type {
  MediaValues,
  MessageContactValues,
  MessageLocationValues,
  MessageReactionValues,
  MessageSenderValues,
  MessageValues,
} from '../interfaces';
import type {
  MessageDirection,
  MessageStatus,
  MessageType,
  Platform,
} from '../types';

export class Message {
  private id: string;
  private caption: string;
  private contacts: MessageContactValues[];
  private conversationId: string;
  private createdAt: string;
  private deliveredAt: string;
  private direction: MessageDirection;
  private failedAt: string;
  private forwarded: boolean;
  private forwardedManyTimes: boolean;
  private location: MessageLocationValues;
  private media: MediaValues;
  private platform: Platform;
  private platformId: string;
  private reactions: MessageReactionValues[];
  private readAt: string;
  private sender: MessageSenderValues;
  private sentAt: string;
  private status: MessageStatus;
  private text: string;
  private type: MessageType;

  constructor(
    id: string,
    caption: string,
    contacts: MessageContactValues[] = [],
    conversationId: string,
    createdAt: string = new Date().toISOString(),
    deliveredAt: string = new Date().toISOString(),
    direction: MessageDirection,
    failedAt: string = new Date().toISOString(),
    forwarded: boolean = false,
    forwardedManyTimes: boolean = false,
    location: MessageLocationValues,
    media: MediaValues,
    platform: Platform,
    platformId: string,
    reactions: MessageReactionValues[] = [],
    readAt: string,
    sender: MessageSenderValues,
    sentAt: string,
    status: MessageStatus,
    text: string,
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
    this.platform = platform;
    this.platformId = platformId;
    this.reactions = reactions;
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
      platform: this.platform,
      platformId: this.platformId,
      reactions: this.reactions,
      readAt: this.readAt,
      sender: this.sender,
      sentAt: this.sentAt,
      status: this.status,
      text: this.text,
      type: this.type,
    };
  }
}
