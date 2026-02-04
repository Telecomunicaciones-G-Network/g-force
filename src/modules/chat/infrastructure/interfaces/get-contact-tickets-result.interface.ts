import type {
  TicketStatusCode,
  TicketStatusName,
} from '@module-ticket/domain/types';

/**
 * @name GetContactTicketsResult
 *
 * @description This interface represents the result of a contact's ticket query.
 *
 * @property {number} [assigned_department_id] - The ID of the assigned department
 * @property {string} [assigned_department_name] - The name of the assigned department
 * @property {number} [client_id] - The client ID
 * @property {number} [contract_id] - The contract ID
 * @property {string} [created_at] - The creation date
 * @property {number} [created_department_id] - The ID of the creating department
 * @property {string} [created_department_name] - The name of the creating department
 * @property {string} [date_created_at] - The creation date in ISO 8601 format
 * @property {string | null} [description] - The description of the ticket
 * @property {boolean} [is_from_portal] - Indicates if the ticket was created from the portal
 * @property {string} [issue_name] - The issue name
 * @property {string} [short_description] - The short description of the ticket
 * @property {TicketStatusCode} [status_code] - The ticket's status code
 * @property {TicketStatusName} [status_name] - The name of the ticket status
 * @property {number} [ticket_number] - The ticket number
 */
export interface GetContactTicketsResult {
  assigned_department_id: number;
  assigned_department_name: string;
  client_id: number;
  contract_id: number;
  created_at: string;
  created_department_id: number;
  created_department_name: string;
  date_created_at: string;
  description?: string | null;
  is_from_portal: boolean;
  issue_name: string;
  short_description: string;
  status_code: TicketStatusCode;
  status_name: TicketStatusName;
  ticket_number: number;
}
