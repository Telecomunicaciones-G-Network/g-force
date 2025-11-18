// CHECKED:

import type {
  ContactValues,
  GetContactsResponse,
} from '../../domain/interfaces';

export interface GetContactsViewModel
  extends Partial<
    Omit<GetContactsResponse, 'error' | 'extra' | 'status' | 'success'>
  > {
  contacts?: ContactValues[];
  cursor?: string | null;
  hasMore?: boolean;
  nextCursor?: string | null;
}
