export class GetChatMediaByIdException extends Error {
  public code: string;
  public mediaId: string;
  public status: number = 500;

  constructor(config?: {
    message?: string;
    status?: number;
    mediaId?: string;
  }) {
    super(
      config?.message ||
        `Ha ocurrido un error al obtener el archivo con el ID: ${config?.mediaId}.`,
    );

    this.code = 'GET_CHAT_MEDIA_BY_ID_GENERAL_EXCEPTION';
    this.name = 'GetChatMediaByIdGeneralException';
    this.status = config?.status ?? 500;
  }
}
