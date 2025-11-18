import type { ContactValues } from '../../domain/interfaces';

export interface GetContactsViewModel {
  contacts?: ContactValues[];
  cursor?: string | null;
  hasMore?: boolean;
  nextCursor?: string | null;
}
