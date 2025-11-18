// CHECKED:

import type { GetContactsResponse } from '../../domain/interfaces';
import type { GetContactsViewModel } from '../viewmodels';

export const getContactsPresenter = (
  input: GetContactsResponse,
): GetContactsViewModel => {
  return {
    contacts: input?.contacts ?? [],
    cursor: input?.cursor ?? null,
    hasMore: input?.hasMore ?? false,
    nextCursor: input?.nextCursor ?? null,
  };
};
