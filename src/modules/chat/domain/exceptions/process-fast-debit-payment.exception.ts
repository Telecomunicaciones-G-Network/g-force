export class ProcessFastDebitPaymentException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    message?: string;
    status?: number;
  }) {
    super(
      config?.message ??
        'Lo sentimos. Ha ocurrido un error al procesar el debito inmediato.',
    );

    this.code = 'PROCESS_FAST_DEBIT_PAYMENT_GENERAL_EXCEPTION';
    this.name = 'ProcessFastDebitPaymentGeneralException';
    this.status = config?.status ?? 500;
  }
}
