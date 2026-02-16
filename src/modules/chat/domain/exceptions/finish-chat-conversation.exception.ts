export class FinishChatConversationException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    contactId?: string;
    message?: string;
    status?: number;
  }) {
    super(
      config?.message || config?.contactId
        ? `Ha ocurrido un error al cerrar la conversación del contacto ${config?.contactId}.`
        : 'Ha ocurrido un error al cerrar la conversación.',
    );

    this.code = 'FINISH_CHAT_CONVERSATION_GENERAL_EXCEPTION';
    this.name = 'FinishChatConversationGeneralException';
    this.status = config?.status ?? 500;
  }
}
