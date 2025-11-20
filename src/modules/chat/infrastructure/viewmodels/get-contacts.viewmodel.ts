// DONE:

import type {
  GetContactsResponse,
  GetContactsResponseContact,
} from '../../domain/interfaces';

export interface GetContactsViewModel
  extends Partial<
    Omit<GetContactsResponse, 'error' | 'extra' | 'status' | 'success'>
  > {
  contacts?: GetContactsResponseContact[];
  cursor?: string | null;
  hasMore?: boolean;
  nextCursor?: string | null;
}
