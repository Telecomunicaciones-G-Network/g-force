// DONE:

import type { ApiResponse } from '@module-core/interfaces';
import type { ContactValues } from './contact-values.interface';
import type { MessageValues } from './message-values.interface';

export interface GetContactsResponseContact extends ContactValues {
  latestMessage: Pick<
    MessageValues,
    'id' | 'createdAt' | 'direction' | 'sender' | 'status' | 'text' | 'type'
  >;
}

export interface GetContactsResponse extends Omit<ApiResponse, 'results'> {
  contacts: GetContactsResponseContact[];
}
