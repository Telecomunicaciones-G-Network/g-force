export class GetChatTransferAgentsException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    message?: string;
    status?: number;
  }) {
    super(
      config?.message ??
        'Ha ocurrido un error al obtener la lista de agentes disponibles.',
    );

    this.code = 'GET_CHAT_TRANSFER_AGENTS_GENERAL_EXCEPTION';
    this.name = 'GetChatTransferAgentsGeneralException';
    this.status = config?.status ?? 500;
  }
}
