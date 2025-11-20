// DONE:

import type { GetContactsResponse } from '../../domain/interfaces';
import type { GetContactsViewModel } from '../viewmodels';

export const getContactsPresenter = (
  input: GetContactsResponse,
): GetContactsViewModel => {
  return {
    contacts: input?.contacts
      ? input?.contacts?.map((contact) => {
          return {
            id: contact?.id,
            name: contact?.name,
            latestMessage: {
              id: contact?.latestMessage?.id,
              createdAt: contact?.latestMessage?.createdAt,
              direction: contact?.latestMessage?.direction,
              sender: {
                id: contact?.latestMessage?.sender?.id,
                name: contact?.latestMessage?.sender?.name,
              },
              status: contact?.latestMessage?.status,
              text: contact?.latestMessage?.text,
              type: contact?.latestMessage?.type,
            },
          };
        })
      : [],
    cursor: input?.cursor ?? null,
    hasMore: input?.hasMore ?? false,
    nextCursor: input?.nextCursor ?? null,
  };
};
