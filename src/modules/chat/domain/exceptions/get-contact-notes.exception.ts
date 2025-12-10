export class GetContactNotesException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    contactId: string;
    message?: string;
    status?: number;
  }) {
    super(
      config?.message || config?.contactId
        ? `Ha ocurrido un error al obtener las notas del contacto ${config?.contactId}.`
        : 'Ha ocurrido un error al obtener las notas del contacto.',
    );

    this.code = 'GET_CONTACT_NOTES_GENERAL_EXCEPTION';
    this.name = 'GetContactNotesGeneralException';
    this.status = config?.status ?? 500;
  }
}
