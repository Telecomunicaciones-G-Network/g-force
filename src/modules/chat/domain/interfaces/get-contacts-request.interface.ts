import type {
  AssignedToScope,
  ContactPlatform,
  ConversationStatus,
  TeamCodename,
} from '../types';

/**
 * @name GetContactsRequest
 *
 * @description Request parameters for fetching contacts from the API.
 * These parameters are sent as query params to GET /contacts endpoint.
 *
 * @property platform - Filter by contact platform (e.g., WHATSAPP)
 * @property status - Filter by conversation status (WAITING, ASSIGNED, FINISHED)
 * @property search - Search in contact name or phone number
 * @property assigned_to - Assignment scope filter (my_teams, me, bot)
 * @property team_codename - Filter by specific team codename
 * @property cursor - Pagination cursor for next page
 * @property limit - Number of results per page (default 20, max 100)
 */
export interface GetContactsRequest {
  platform?: ContactPlatform;
  status?: ConversationStatus;
  search?: string;
  assigned_to?: AssignedToScope;
  team_codename?: TeamCodename;
  cursor?: string;
  limit?: string;
}
