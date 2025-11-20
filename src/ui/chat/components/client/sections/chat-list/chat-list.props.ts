// DONE:

import type { GetContactsResponse } from '@modules/chat/domain/interfaces';

export interface ChatListProps {
  chatContactsResponsePromise: Promise<GetContactsResponse>;
}
