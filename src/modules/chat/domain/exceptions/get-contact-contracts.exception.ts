/**
 * @name GetContactContractsException
 *
 * @description This exception is thrown when an error occurs while getting contact contracts.
 *
 * @property {string} [contactId] - The contact ID
 * @property {string} [message] - The error message
 * @property {number} [status] - The HTTP status code
 */
export class GetContactContractsException extends Error {
  public code: string;
  public status: number = 500;

  /**
   * constructor
   */
  constructor(config?: {
    contactId?: string;
    message?: string;
    status?: number;
  }) {
    super(
      config?.message || config?.contactId
        ? `Ha ocurrido un error al obtener los contratos del contacto ${config?.contactId}.`
        : 'Ha ocurrido un error al obtener los contratos del contacto.',
    );

    this.code = 'GET_CONTACT_CONTRACTS_GENERAL_EXCEPTION';
    this.name = 'GetContactContractsGeneralException';
    this.status = config?.status ?? 500;
  }
}
