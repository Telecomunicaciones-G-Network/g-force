export class GetAvailableReportPaymentMethodsException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: { message?: string; status?: number }) {
    super(
      config?.message ||
        'Ha ocurrido un error al obtener los métodos de pago disponibles.',
    );

    this.code = 'GET_AVAILABLE_REPORT_PAYMENT_METHODS_GENERAL_EXCEPTION';
    this.name = 'GetAvailableReportPaymentMethodsGeneralException';
    this.status = config?.status ?? 500;
  }
}
