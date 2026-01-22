export class GetTicketsException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: { message?: string; status?: number }) {
    super(config?.message || 'Ha ocurrido un error al obtener los tickets.');

    this.code = 'GET_TICKETS_GENERAL_EXCEPTION';
    this.name = 'GetTicketsGeneralException';
    this.status = config?.status ?? 500;
  }
}
