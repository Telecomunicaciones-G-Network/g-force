import type { ContactValues } from './contact-values.interface';
import type { GetContactsResponse } from './get-contacts-response.interface';

export interface GetContactsMappedResponse
  extends Omit<GetContactsResponse, 'has_more' | 'next_cursor' | 'results'> {
  hasMore?: boolean;
  nextCursor?: string;
  results?: ContactValues[];
}
