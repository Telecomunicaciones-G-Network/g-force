'use server';

import type {
  GetContactsRequest,
  GetContactsResponse,
} from '@module-chat/domain/interfaces';

import { GetContactsQuery } from '@module-chat/infrastructure/queries/get-contacts.query';

/**
 * @name getFilteredContactsAction
 *
 * @description Server action to fetch contacts with filters applied.
 * This action is called from client components when filters change.
 *
 * @param filters - Query parameters for filtering contacts
 * @returns Promise with the filtered contacts response
 *
 * @example
 * ```ts
 * const filters = { platform: 'WHATSAPP', status: 'ASSIGNED' };
 * const response = await getFilteredContactsAction(filters);
 * ```
 */
export async function getFilteredContactsAction(
  filters?: GetContactsRequest,
): Promise<GetContactsResponse> {
  return await GetContactsQuery(filters);
}
