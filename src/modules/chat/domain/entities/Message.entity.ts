// DONE:

import type { MessageSenderValues, MessageValues } from '../interfaces';
import type { MessageDirection, MessageStatus, MessageType } from '../types';

export class Message {
  private id: string;
  private conversationId: string;
  private createdAt: string;
  private deliveredAt: string;
  private direction: MessageDirection;
  private failedAt: string;
  private readAt: string;
  private sender: MessageSenderValues;
  private sentAt: string;
  private status: MessageStatus;
  private text: string;
  private type: MessageType;

  constructor(
    id: string,
    conversationId: string,
    createdAt: string = new Date().toISOString(),
    deliveredAt: string = new Date().toISOString(),
    direction: MessageDirection,
    failedAt: string = new Date().toISOString(),
    readAt: string,
    sender: MessageSenderValues,
    sentAt: string,
    status: MessageStatus,
    text: string,
    type: MessageType,
  ) {
    this.id = id;
    this.conversationId = conversationId;
    this.createdAt = createdAt;
    this.deliveredAt = deliveredAt;
    this.direction = direction;
    this.failedAt = failedAt;
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
      conversationId: this.conversationId,
      createdAt: this.createdAt,
      deliveredAt: this.deliveredAt,
      direction: this.direction,
      failedAt: this.failedAt,
      readAt: this.readAt,
      sender: this.sender,
      sentAt: this.sentAt,
      status: this.status,
      text: this.text,
      type: this.type,
    };
  }
}
