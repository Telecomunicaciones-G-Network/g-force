/**
 * @name CreateTicketFormData
 *
 * @description Interface to represent the create ticket form data.
 *
 * @property {string} department - The department.
 * @property {string} description - The description.
 * @property {string} issue - The issue.
 */
export interface CreateTicketFormData {
  department: string;
  description: string;
  issue: string;
}
