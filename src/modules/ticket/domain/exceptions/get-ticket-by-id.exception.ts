export class GetTicketByIdException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: { message?: string; status?: number }) {
    super(
      config?.message || 'Ha ocurrido un error al obtener el ticket.',
    );

    this.code = 'GET_TICKET_BY_ID_GENERAL_EXCEPTION';
    this.name = 'GetTicketByIdGeneralException';
    this.status = config?.status ?? 500;
  }
}
