import type {
  ContactAssignment,
  ContactPlatform,
  ConversationStatus,
  TeamCodename,
} from '../types';

/**
 * @interface GetContactsRequest
 *
 * @description This interface represents the request for the get contacts query.
 *
 * @property {ContactAssignment} assignedTo - The assignment of the contacts.
 * @property {string} cursor - The cursor of the contacts.
 * @property {string} limit - The limit of the contacts.
 * @property {ContactPlatform} platform - The platform of the contacts.
 * @property {string} search - The search query of the contacts.
 * @property {ConversationStatus} status - The status of the contacts.
 * @property {TeamCodename} teamCodename - The codename of the team.
 */
export interface GetContactsRequest {
  assignedTo?: ContactAssignment;
  cursor?: string;
  limit?: string;
  platform?: ContactPlatform;
  search?: string;
  status?: ConversationStatus;
  teamCodename?: TeamCodename;
}
