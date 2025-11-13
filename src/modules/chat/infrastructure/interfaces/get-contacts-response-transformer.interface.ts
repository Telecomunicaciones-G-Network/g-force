import type { GetContactsResponse } from '../../domain/interfaces';

import { ContactViewModel } from '../viewmodels/contact.viewmodel';

export interface GetContactsResponseTransformer
  extends Omit<GetContactsResponse, 'results'> {
  results?: ContactViewModel[];
}
