export class TransferChatConversationException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    message?: string;
    status?: number;
  }) {
    super(
      config?.message ??
        'Lo sentimos. Ha ocurrido un error al transferir la conversación.',
    );

    this.code = 'TRANSFER_CHAT_CONVERSATION_GENERAL_EXCEPTION';
    this.name = 'TransferChatConversationGeneralException';
    this.status = config?.status ?? 500;
  }
}
