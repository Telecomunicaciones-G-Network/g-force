export interface GetTeamSharedMediaRequest {
  teamCodename: string;
  search?: string;
  cursor?: string;
  limit?: number;
}
