export class GetContactInvoicesException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    contactId: string;
    message?: string;
    status?: number;
  }) {
    super(
      config?.message || config?.contactId
        ? `Ha ocurrido un error al obtener las facturas del contacto ${config?.contactId}.`
        : 'Ha ocurrido un error al obtener las facturas del contacto.',
    );

    this.code = 'GET_CONTACT_INVOICES_GENERAL_EXCEPTION';
    this.name = 'GetContactInvoicesGeneralException';
    this.status = config?.status ?? 500;
  }
}
