import type { GetContactsRequest } from '@module-chat/domain/interfaces';
import type { ContactFilters } from '@ui-chat/stores/contact-store/contact-store.props';

/**
 * @name buildContactsQuery
 *
 * @description Builds a GetContactsRequest query object from ContactFilters.
 * Maps the store filter state to API query parameters.
 *
 * @param filters - The contact filters from the store
 * @returns GetContactsRequest object ready to be sent to the API
 *
 * @example
 * ```ts
 * const filters = {
 *   platform: 'WHATSAPP',
 *   status: 'ASSIGNED',
 *   assignedTo: 'me',
 *   teamCodename: 'SUPPORT'
 * };
 * const query = buildContactsQuery(filters);
 * // Returns: { platform: 'WHATSAPP', status: 'ASSIGNED', assigned_to: 'me', team_codename: 'SUPPORT' }
 * ```
 */
export const buildContactsQuery = (
  filters: ContactFilters,
): GetContactsRequest => {
  const query: GetContactsRequest = {};

  // Only include non-null filter values
  if (filters.platform) {
    query.platform = filters.platform;
  }

  if (filters.status) {
    query.status = filters.status;
  }

  if (filters.assignedTo) {
    query.assigned_to = filters.assignedTo;
  }

  if (filters.teamCodename) {
    query.team_codename = filters.teamCodename;
  }

  return query;
};
