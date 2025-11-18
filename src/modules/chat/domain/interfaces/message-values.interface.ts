import type { MessageDirection, MessageStatus, MessageType } from '../types';
import type { AgentValues } from './agent-values.interface';

export interface MessageValues {
  createdAt: Date;
  direction: MessageDirection;
  id: string;
  sender: AgentValues;
  status: MessageStatus;
  textPreview: string;
  type: MessageType;
}
