export class CreateTicketException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: { message?: string; status?: number }) {
    super(config?.message || 'Ha ocurrido un error al crear el ticket.');

    this.code = 'CREATE_TICKET_GENERAL_EXCEPTION';
    this.name = 'CreateTicketGeneralException';
    this.status = config?.status ?? 500;
  }
}
