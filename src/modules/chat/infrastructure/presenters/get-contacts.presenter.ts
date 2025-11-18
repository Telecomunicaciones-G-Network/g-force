import type { GetContactsMappedResponse } from '../../domain/interfaces';
import type { GetContactsViewModel } from '../viewmodels';

export const getContactsPresenter = (
  input: GetContactsMappedResponse,
): GetContactsViewModel => {
  return {
    contacts: input?.results,
    cursor: input?.cursor,
    hasMore: input?.hasMore,
    nextCursor: input?.nextCursor,
  };
};
