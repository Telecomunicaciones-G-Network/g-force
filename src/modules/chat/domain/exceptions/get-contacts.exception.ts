/**
 * @class GetContactsException
 *
 * @description This exception is thrown when an error occurs while getting contacts.
 *
 * @property {string} [message] - The error message
 * @property {number} [status] - The HTTP status code
 */
export class GetContactsException extends Error {
  public code: string;
  public status: number = 500;

  /**
   * constructor
   */
  constructor(config?: { message?: string; status?: number }) {
    super(config?.message || 'Ha ocurrido un error al obtener los contactos.');

    this.code = 'GET_CONTACTS_GENERAL_EXCEPTION';
    this.name = 'GetContactsGeneralException';
    this.status = config?.status ?? 500;
  }
}
