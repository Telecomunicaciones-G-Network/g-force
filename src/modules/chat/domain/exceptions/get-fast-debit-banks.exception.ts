export class GetFastDebitBanksException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    message?: string;
    status?: number;
  }) {
    super(
      config?.message ??
        'Ha ocurrido un error al obtener la lista de bancos disponibles.',
    );

    this.code = 'GET_FAST_DEBIT_BANKS_GENERAL_EXCEPTION';
    this.name = 'GetFastDebitBanksGeneralException';
    this.status = config?.status ?? 500;
  }
}
