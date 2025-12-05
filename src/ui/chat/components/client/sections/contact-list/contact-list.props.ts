import type { GetContactsResponse } from '@modules/chat/domain/interfaces';

export interface ContactListProps {
  chatContactsResponsePromise: Promise<GetContactsResponse>;
}
