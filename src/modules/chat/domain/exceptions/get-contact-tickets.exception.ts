/**
 * @name GetContactTicketsException
 *
 * @description This exception is thrown when an error occurs while getting contact tickets.
 *
 * @property {string} [contactId] - The contact ID
 * @property {string} [message] - The error message
 * @property {number} [status] - The HTTP status code
 */
export class GetContactTicketsException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    contactId?: string;
    message?: string;
    status?: number;
  }) {
    super(
      config?.message || config?.contactId
        ? `Ha ocurrido un error al obtener los tickets del contacto ${config?.contactId}.`
        : 'Ha ocurrido un error al obtener los tickets del contacto.',
    );

    this.code = 'GET_CONTACT_TICKETS_EXCEPTION';
    this.name = 'GetContactTicketsException';
    this.status = config?.status ?? 500;
  }
}
