import type { GetContactsResponseContact } from '@module-chat/domain/interfaces';

export interface ChatListBodyProps {
  contacts?: GetContactsResponseContact[];
}
