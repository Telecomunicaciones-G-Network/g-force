// CHECKED:

import type { GetContactsRequest, GetContactsResponse } from '../interfaces';

export interface ChatRepository {
  getContacts(request?: GetContactsRequest): Promise<GetContactsResponse>;
}
