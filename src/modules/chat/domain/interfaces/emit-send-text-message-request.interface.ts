import type { MessageValues } from './message-values.interface';

export interface EmitSendTextMessageRequest {
  conversationId: string;
  message: MessageValues;
  onSuccess?: () => void;
}
