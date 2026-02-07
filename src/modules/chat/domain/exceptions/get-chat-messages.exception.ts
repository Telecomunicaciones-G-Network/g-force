export class GetChatMessagesException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: { message?: string; status?: number }) {
    super(
      config?.message || 'Ha ocurrido un error al obtener mensajes del chat.',
    );

    this.code = 'GET_CHAT_MESSAGES_GENERAL_EXCEPTION';
    this.name = 'GetChatMessagesGeneralException';
    this.status = config?.status ?? 500;
  }
}
