export class UploadChatMediaException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: { message?: string; status?: number }) {
    super(config?.message || 'Ha ocurrido un error al cargar el archivo.');

    this.code = 'UPLOAD_CHAT_MEDIA_GENERAL_EXCEPTION';
    this.name = 'UploadChatMediaGeneralException';
    this.status = config?.status ?? 500;
  }
}
