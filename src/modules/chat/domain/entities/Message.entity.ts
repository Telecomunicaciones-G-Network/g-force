import type { MessageDirection, MessageStatus, MessageType } from '../types';

import { Agent } from './Agent.entity';

export class Message {
  id: string;

  direction: MessageDirection;

  sender: Agent;

  status: MessageStatus;

  textPreview: string;

  type: MessageType;

  createAt: Date;
}
