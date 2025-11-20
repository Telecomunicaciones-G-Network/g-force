// DONE:

export class GetContactsException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: { message?: string; status?: number }) {
    super(config?.message || 'Ha ocurrido un error al obtener los contactos.');

    this.code = 'GET_CONTACTS_GENERAL_EXCEPTION';
    this.name = 'GetContactsGeneralException';
    this.status = config?.status ?? 500;
  }
}
