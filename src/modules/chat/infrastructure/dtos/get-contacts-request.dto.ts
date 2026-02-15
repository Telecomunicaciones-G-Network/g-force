import type {
  ContactAssignment,
  ContactPlatform,
  ConversationStatus,
  TeamCodename,
} from '../../domain/types';

/**
 * @name GetContactsRequestDTO
 *
 * @description This interface represents the request for getting contacts.
 *
 * @property {ContactAssignment} assigned_to - The assignment of the contacts.
 * @property {string} cursor - The cursor of the contacts.
 * @property {string} limit - The limit of the contacts.
 * @property {ContactPlatform} platform - The platform of the contacts.
 * @property {string} search - The search query of the contacts.
 * @property {ConversationStatus} status - The status of the contacts.
 * @property {TeamCodename} team_codename - The codename of the team.
 */
export interface GetContactsRequestDTO {
  assigned_to?: ContactAssignment;
  cursor?: string;
  limit?: string;
  platform?: ContactPlatform;
  search?: string;
  status?: ConversationStatus;
  team_codename?: TeamCodename;
}
