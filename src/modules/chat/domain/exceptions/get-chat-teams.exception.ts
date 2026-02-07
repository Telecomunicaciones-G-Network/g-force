export class GetChatTeamsException extends Error {
  public code: string;
  public status: number = 500;

  constructor(config?: {
    message?: string;
    status?: number;
  }) {
    super(
      config?.message ?? 'Ha ocurrido un error al obtener la lista de equipos.',
    );

    this.code = 'GET_CHAT_TEAMS_GENERAL_EXCEPTION';
    this.name = 'GetChatTeamsGeneralException';
    this.status = config?.status ?? 500;
  }
}
