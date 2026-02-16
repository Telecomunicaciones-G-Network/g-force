export class GetContactInformationException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    contactId: string;
    message?: string;
    status?: number;
  }) {
    super(
      config?.message || config?.contactId
        ? `Ha ocurrido un error al obtener la información del contacto ${config?.contactId}.`
        : 'Ha ocurrido un error al obtener la información del contacto.',
    );

    this.code = 'GET_CONTACT_INFORMATION_GENERAL_EXCEPTION';
    this.name = 'GetContactInformationGeneralException';
    this.status = config?.status ?? 500;
  }
}
