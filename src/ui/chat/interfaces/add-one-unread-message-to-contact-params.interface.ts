import type { MessageType } from '@module-chat/domain/types';

export interface AddOneUnreadMessageToContactParams {
  contactId: string;
  lastMessage: string | null;
  messageType: MessageType;
}
