export class GetContactContractsException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    contactId: string;
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
