// CHECKED:

import type { ApiResponse } from '@module-core/interfaces';
import type { ContactValues } from './contact-values.interface';

export interface GetContactsResponse extends Omit<ApiResponse, 'results'> {
  contacts: ContactValues[];
}
