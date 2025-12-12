import type { ContactValues } from '@module-chat/domain/interfaces';
import type { MessageType } from '@module-chat/domain/types';

export interface AddOneUnreadMessageToContactParams {
  activeContact: ContactValues | null;
  contactId: string;
  lastMessage: string | null;
  messageType: MessageType;
}
