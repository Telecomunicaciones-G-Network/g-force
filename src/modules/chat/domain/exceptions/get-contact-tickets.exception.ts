export class GetContactTicketsException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    contactId: string;
    message?: string;
    status?: number;
  }) {
    super(
      config?.message || config?.contactId
        ? `Ha ocurrido un error al obtener los tickets del contacto ${config?.contactId}.`
        : 'Ha ocurrido un error al obtener los tickets del contacto.',
    );

    this.code = 'GET_CONTACT_TICKETS_GENERAL_EXCEPTION';
    this.name = 'GetContactTicketsGeneralException';
    this.status = config?.status ?? 500;
  }
}
