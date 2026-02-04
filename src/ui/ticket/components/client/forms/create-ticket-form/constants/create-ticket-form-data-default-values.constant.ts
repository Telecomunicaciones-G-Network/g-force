import type { CreateTicketFormData } from '../interface';

/**
 * @name CREATE_TICKET_FORM_DATA_DEFAULT_VALUES
 *
 * @description Default values for the create ticket form data.
 *
 * @returns {CreateTicketFormData} - The default values for the create ticket form data.
 */
export const CREATE_TICKET_FORM_DATA_DEFAULT_VALUES: CreateTicketFormData = {
  department: '',
  description: '',
  issue: '',
} as const;
