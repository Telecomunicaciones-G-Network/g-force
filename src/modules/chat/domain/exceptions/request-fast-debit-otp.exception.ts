export class RequestFastDebitOTPException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    message?: string;
    status?: number;
  }) {
    super(
      config?.message ??
        'Lo sentimos. Ha ocurrido un error al solicitar el OTP.',
    );

    this.code = 'REQUEST_FAST_DEBIT_OTP_GENERAL_EXCEPTION';
    this.name = 'RequestFastDebitOTPGeneralException';
    this.status = config?.status ?? 500;
  }
}
