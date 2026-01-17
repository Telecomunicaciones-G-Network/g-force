import type { ApiResponse } from '@module-core/interfaces';
import type { Contact } from './contact.interface';

export interface GetContactsResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  contacts: Contact[];
}
