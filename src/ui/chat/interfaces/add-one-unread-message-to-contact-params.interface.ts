import type { ContactValues } from '@module-chat/domain/interfaces';

export interface AddOneUnreadMessageToContactParams {
  contactId: string;
  lastMessage: string | null;
  activeContact: ContactValues | null;
}
