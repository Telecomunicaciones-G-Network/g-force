/**
 * @name GetAgentsException
 *
 * @description This exception is thrown when an error occurs while getting agents.
 *
 * @property {string} [message] - The error message
 * @property {number} [status] - The HTTP status code
 *
 * TODO: Apply the DRY principle
 */
export class GetAgentsException extends Error {
  public code: string;
  public status: number = 500;

  /**
   * constructor
   */
  constructor(config?: {
    message?: string;
    status?: number;
  }) {
    super(
      config?.message ?? 'Ha ocurrido un error al obtener la lista de agentes.',
    );

    this.code = 'GET_AGENTS_GENERAL_EXCEPTION';
    this.name = 'GetAgentsGeneralException';
    this.status = config?.status ?? 500;
  }
}
